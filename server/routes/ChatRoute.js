import express from 'express';
import { createChat, findChat, userChats } from '../controllers/ChatController.js';

const router = express.Router();

router.post('/create', createChat); // נשאר רק זה
router.post('/', createChat);       // או רק אחד מהם
router.get('/:userId', userChats);
router.get('/find/:firstId/:secondId', findChat);

export default router;
