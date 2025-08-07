import express from 'express';
import {
  showForgotPassword,
  handleForgotPassword,
  showResetPassword,
  handleResetPassword
} from '../controllers/resetController.js';

const resetRouter = express.Router();

resetRouter.get('/forgot-password', showForgotPassword);
resetRouter.post('/forgot-password', handleForgotPassword);

resetRouter.get('/reset-password/:token', showResetPassword);
resetRouter.post('/reset-password/:token', handleResetPassword);

export default resetRouter;