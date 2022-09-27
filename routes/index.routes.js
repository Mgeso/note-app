import express from 'express';
import noteRouter from './notes.routes.js';
import userRouter from './user.route.js';

const router = express.Router();

router.use('/notes', noteRouter);
router.use('/users', userRouter);

export default router;