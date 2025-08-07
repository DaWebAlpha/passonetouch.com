import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from './db.js';
import dotenv from 'dotenv';

dotenv.config();

const SESSION_SECRET = process.env.SESSION_SECRET;

if (!SESSION_SECRET) {
  throw new Error('SESSION_SECRET is not defined in .env');
}

export default session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    client: mongoose.connection.getClient(),
    collectionName: 'sessions',
    ttl: 1000 * 60 * 60 * 24 * 7 // Optional: 7 days
  }),
  cookie: {
    secure: true,             // ⚠️ Must be served over HTTPS
    httpOnly: true,
    sameSite: 'lax',          // 'none' if frontend/backend are cross-domain with credentials
    domain: 'passonetouch.com'
  }
});

