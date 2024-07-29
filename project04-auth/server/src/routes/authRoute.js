import express from 'express';
import { signup, login, user, forgotPassword } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authenticateToken, user);
router.post('/forgot-password', forgotPassword);

export default router;