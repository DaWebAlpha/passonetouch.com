import jwt from 'jsonwebtoken';
import { isTokenBlacklisted, blacklistToken } from '../utils/tokenBlacklist.js';
import dotenv from 'dotenv';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

// ✅ Middleware to ensure Admin access
export function ensureAdmin() {
  return function (req, res, next) {
    const token = req.cookies?.token;

    if (!token || isTokenBlacklisted(token)) {
      return res.status(401).render('error', {
        title: 'Unauthorized',
        error: 'You must be logged in to access this page.'
      });
    }

    try {
      const payload = jwt.verify(token, jwtSecret);

      if (payload.role !== 'admin') {
        return res.status(403).render('error', {
          title: 'Forbidden',
          error: 'Admins only. You do not have permission to access this page.'
        });
      }

      req.user = payload;
      req.isAdmin = true;
      next();
    } catch (err) {
      
      return res.status(401).render('error', {
        title: 'Invalid Token',
        error: 'Your session has expired or token is invalid. Please log in again.'
      });
    }
  };
}

// ✅ Middleware to ensure any logged-in user
export function ensureUser() {
  return function (req, res, next) {
    const token = req.cookies?.token;

    if (!token || isTokenBlacklisted(token)) {
      return res.status(401).render('login', {
        error: 'Please log in to continue.'
      });
    }

    try {
      const payload = jwt.verify(token, jwtSecret);
      req.user = payload;
      next();
    } catch (err) {
     
      return res.status(401).render('login', {
        error: 'Invalid session. Please log in again.'
      });
    }
  };
}
