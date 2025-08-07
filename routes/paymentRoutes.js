import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';             // ✅ new: to hash password
import { User } from '../models/userModels.js';

dotenv.config();

const router = express.Router();
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// User submits signup form → hit this route to init payment
router.post('/pay', async (req, res) => {
  const { username, email, password, confirmPassword, examType } = req.body;

  try {
    // 1. Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.redirect('/register?error=Email or username already taken');
    }

    // 2. Check if passwords match
    if (password !== confirmPassword) {
      return res.redirect('/register?error=Passwords do not match');
    }

    // 3. All validation passed — now initialize payment
    const paystackRes = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: 1 * 100, // amount in kobo
        metadata: {
          username,
          password,
          confirmPassword,
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

    // 4. Redirect to Paystack payment page
    res.redirect(paystackRes.data.data.authorization_url);
  } catch (err) {
       let message = '';
       if(err.name === 'ValidationError'){
	   let messages = Object.values(err.errors).map(e => e.message);
	   message = messages.join('<br />');
	}
       res.status(500).render('register',{error: message || 'Something went wrong. Please try again.'});
  }
});


// Paystack calls this URL after payment
router.get('/payment/callback', async (req, res) => {
  const reference = req.query.reference;
  

  if (!reference) {
    
    return res.redirect('/register?error=No payment reference returned from Paystack');
  }

  try {
    const verifyRes = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` }
      }
    );

    

    const data = verifyRes.data.data;
    if (data.status === 'success') {
      

      // Extract data from metadata
      const { username, password, confirmPassword, examType } = data.metadata;
      const email = data.customer.email;  // ✅ use email from customer

      // Check if user exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        
        return res.redirect('/register?error=User already exists');
      }

      if (password !== confirmPassword) {
        
        return res.redirect('/register?error=Passwords do not match');
      }

      // ✅ Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      await User.create({
        username,
        email,
        password: hashedPassword,
        examType
      });

      
      res.redirect('/login?success=Registration complete! Please login');
    } else {
    
      res.redirect('/register?error=Payment failed or incomplete');
    }
  } catch (error) {
    
    res.status(500).send('Payment verification failed.');
  }
});

export default router;
