import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import validator from 'validator';
import { autoCatchFn } from '../lib/autoCatchFn.js';
import { get as getUser, create as createUser, list as listUsers } from './authUser.js';
import { ensureAdmin, ensureUser } from '../middleware/authmiddleware.js';
//import { Order } from '../models/orderModels.js';
import { blacklistToken } from '../utils/tokenBlacklist.js';
import { User } from '../models/userModels.js';
import dotenv from 'dotenv';
import { activeUsers } from '../utils/activeUsers.js';


dotenv.config();

const jwtSecret = process.env.JWT_SECRET;
const adminPassword = process.env.ADMIN_PASSWORD;
const isProduction = process.env.NODE_ENV;



// ✅ Rate limiter for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10,
  message: {
    error: 'Too many attempts from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});



export function setupAuth(app) {
  app.use(cookieParser());

app.get('/register', (req, res) => {
  res.render('register', { error: null }); // Initially no error
});

app.post('/register', authLimiter, autoCatchFn(async (req, res) => {
  const { username, password, email, examType } = req.body || {};

  
  if (!username || !password || !email || !examType) {
    return res.status(400).render('register', {
      error: 'All fields are required, including Exam Type.',
    });
  }

  if (!validator.isStrongPassword(password, {
    minLength: 8, minLowercase: 1, minUppercase: 1,
    minNumbers: 1, minSymbols: 1
  })) {
    return res.status(400).render('register', {
      error: 'Password must be at least 8 characters and include uppercase, lowercase, number, and symbol.',
    });
  }

  try {
    await createUser({ username, password, email, examType });
  
    return res.redirect('/login');
  } catch (err) {
    

    let message = 'Registration failed.';

    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      message = messages.join('<br>');
    }
    

    return res.status(400).render('register', { error: message });
  }
}));





  // ✅ Admin-only route to list users
  app.get('/listUsers', ensureAdmin(), autoCatchFn(async (req, res) => {
    const users = await listUsers();
    if (!Array.isArray(users)) {
      return res.status(500).json({ error: 'User list is not available' });
    }
    res.render('admin/registeredUser', { users, error: null });
  }));



// ✅ DELETE specific user
app.delete('/admin/users/:username', ensureAdmin(), autoCatchFn(async (req, res) => {
  const { username } = req.params;

  if (username === 'admin') {
    return res.status(403).render('admin/registeredUser', {
      users: await User.find({}, 'username email'),
      error: 'Cannot delete admin user'
    });
  }

  const deleted = await User.findOneAndDelete({ username });

  if (!deleted) {
    return res.status(404).render('admin/registeredUser', {
      users: await User.find({}, 'username email'),
      error: 'User not found'
    });
  }

  const users = await User.find({}, 'username email');

  res.render('admin/registeredUser', {
    users,
    error: null
  });
}));



  // ✅ DELETE all non-admin users
  app.delete('/admin/users', ensureAdmin(), autoCatchFn(async (req, res) => {
    const result = await User.deleteMany({ username: { $ne: 'admin' } });
    res.json({ success: true, deletedCount: result.deletedCount });
  }));




  app.get('/login', (req, res) => {
  res.render('login', { error: null }); // define error so it's safe in EJS
});




app.post('/login', authLimiter, autoCatchFn(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).render('login', { error: 'All fields are required.' });
  }

  let userData;

  // ✅ Admin Login
  if (username === 'admin' && password === adminPassword) {
    userData = { username: 'admin', role: 'admin' };
    const token = jwt.sign(userData, jwtSecret, { expiresIn: '2h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'Strict',
    });

        
    return res.redirect('/admin/home');
  }

  // ✅ Regular User Login
  const user = await getUser(username.toLowerCase());

  if (!user) {
    return res.status(401).render('login', { error: 'User not found.' });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).render('login', { error: 'Incorrect password.' });
  }

  // ✅ Add _id to JWT payload so it's available later
  userData = {
    _id: user._id.toString(), // ✅ this fixes the missing userId issue
    username: user.username,
    email: user.email,
    role: 'user',
    examType: user.examType
  };

  const token = jwt.sign(userData, jwtSecret, { expiresIn: '2h' });

  res.cookie('token', token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'Strict',
  });

 


 
  // ✅ Redirect based on examType
  switch (user.examType) {
    case 'Principal Superintendent':
      return res.redirect('/users/ps');
    case 'Assistant Director II':
      return res.redirect('/users/adII');
    case 'Assistant Director I':
      return res.redirect('/users/adI');
    case 'Deputy Director':
      return res.redirect('/users/dd');
    default:
      return res.redirect('/login');
  }
}));





 // ✅ Logout Route
app.post('/logout', (req, res) => {
  const token = req.cookies?.token;

  if (token) {
    blacklistToken(token); 
  }

  res.clearCookie('token');
  
  return res.redirect('/login'); 
});


  // ✅ Check if user is authenticated
  app.get('/me', ensureUser(), (req, res) => {
    res.json({ user: req.user });
  });
}
