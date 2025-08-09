import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { User } from '../models/userModels.js';

dotenv.config();
const router = express.Router();

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// ✅ 1. Initialize Payment and Create "Pending" User
router.post('/pay', async (req, res) => {
  const { username, email, password, confirmPassword, examType } = req.body;

  try {
    // 1. Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.redirect('/register?error=Email or username already taken');
    }

    // 2. Check password match
    if (password !== confirmPassword) {
      return res.redirect('/register?error=Passwords do not match');
    }

    // 3. Create user in DB with pending payment
    const hashedPassword = await bcrypt.hash(password, 10);
    const pendingUser = await User.create({
      username,
      email,
      password: hashedPassword,
      examType,
      status: 'pending_payment'
    });

    // 4. Initialize Paystack Payment
    const paystackRes = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: 1 * 100, // amount in kobo
        metadata: {
          userId: pendingUser._id.toString(),
          examType
        },
        callback_url: `${req.protocol}://${req.get('host')}/payment/callback`
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // 5. Store paystack reference in DB
    pendingUser.paystackRef = paystackRes.data.data.reference;
    await pendingUser.save();

    // 6. Redirect to Paystack payment page
    res.redirect(paystackRes.data.data.authorization_url);

  } catch (err) {
    console.error('Error initializing payment:', err.message);
    res.redirect('/register?error=Something went wrong. Try again.');
  }
});

// ✅ 2. Paystack Webhook → Verify Payment Securely
router.post('/paystack/webhook', express.json({ type: '*/*' }), async (req, res) => {
  const hash = crypto
    .createHmac('sha512', PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (hash !== req.headers['x-paystack-signature']) {
    return res.status(400).send('Invalid signature');
  }

  const event = req.body;
  if (event.event === 'charge.success') {
    try {
      const reference = event.data.reference;
      const user = await User.findOne({ paystackRef: reference });

      if (user && user.status === 'pending_payment') {
        user.status = 'active';
        await user.save();
        console.log(`✅ Payment verified for ${user.email}`);
      }
    } catch (err) {
      console.error('Webhook processing failed:', err.message);
    }
  }

  res.sendStatus(200);
});

// ✅ 3. Callback after Payment → Redirect to Login if Complete
router.get('/payment/callback', async (req, res) => {
  const reference = req.query.reference;

  if (!reference) {
    return res.redirect('/register?error=No payment reference provided');
  }

  try {
    // Verify payment directly with Paystack (just in case webhook hasn't hit yet)
    const verifyRes = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` }
      }
    );

    const paymentData = verifyRes.data.data;

    if (paymentData.status === 'success') {
      // Find user and activate if still pending
      const user = await User.findOne({ paystackRef: reference });
      if (user && user.status !== 'active') {
        user.status = 'active';
        await user.save();
      }

      // ✅ Redirect to login with success message
      return res.redirect('/login?success=Registration complete! Please login');
    } else {
      return res.redirect('/register?error=Payment failed or incomplete');
    }
  } catch (err) {
    console.error('Callback verification error:', err.message);
    return res.redirect('/register?error=Could not verify payment');
  }
});


export default router;
