import { Router } from 'express';
import { login, create ,show } from '../controllers/loginController.js'; 

const router = Router();
console.log('Loginrouter is loading');

router.get('/', login);
router.post('/create', create);
router.get('/show',show);

export default router;
