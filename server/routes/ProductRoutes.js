import express from 'express';
import * as ProductController from '../controllers/ProductController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/get', ProductController.getAllProducts);

router.get('/get/:id', ProductController.getProductById);

// Handle hero image upload for product creation
router.post('/create-product', upload.single('heroimage'), ProductController.createProduct);

// Handle hero image upload for product update
router.put('/update/:id', upload.single('heroimage'), ProductController.updateProduct);

router.delete('/deleteproduct/:id', ProductController.deleteProduct);


export default router;