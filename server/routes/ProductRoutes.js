
import express from 'express';
import * as ProductController from '../controllers/ProductController.js';

const router = express.Router();

router.get('/get', ProductController.getAllProducts);

router.get('/get/:id', ProductController.getProductById);

router.post('/createproduct', ProductController.createProduct);

router.put('/update/:id', ProductController.updateProduct);

router.delete('/deleteproduct/:id', ProductController.deleteProduct);

router.patch('/:id/images', ProductController.updateProductImages);

export default router;