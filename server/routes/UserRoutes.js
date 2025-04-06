import express from 'express';
const router = express.Router();
import UserController from '../controllers/UserController.js';
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

router.post('/login', UserController.login);
router.get('/stats', UserController.stats);
router.post('/send-email', upload.single('file'), UserController.sendEmail);


export default router;

