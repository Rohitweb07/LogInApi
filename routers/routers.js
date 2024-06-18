import { Router } from 'express';
import loginRouter from './login.js'; 

const router = Router();
console.log('router is loading');

router.use('/login', loginRouter);

export default router;
