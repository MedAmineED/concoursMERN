import { Router } from 'express';
import AuthentificationController from '../controllers/AuthentificationController';

const router = Router();

router.post('/register', AuthentificationController.register);
router.get('/verify-email', AuthentificationController.verifyEmail);
router.post('/login', AuthentificationController.login);

export default router;


