import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile);

export default router;
