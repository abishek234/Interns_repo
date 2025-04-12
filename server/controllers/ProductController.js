import Product from '../models/Product.js';
import mongoose from 'mongoose';

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get a single product by ID
const getProductById = async (req, res) => {
    try {
      // Validate if the ID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid product ID format' });
      }
      
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error in getProductById:', error);
      res.status(500).json({ message: error.message });
    }
  };
// Create a new product
const createProduct = async (req, res) => {
  const images = Array.isArray(req.body.image) ? req.body.image : [req.body.image];
  
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    image: images,
    heroimage: req.body.heroimage
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    if (req.body.title) product.title = req.body.title;
    if (req.body.description) product.description = req.body.description;
    if (req.body.image) {
      product.image = Array.isArray(req.body.image) ? req.body.image : [req.body.image];
    }
    if (req.body.heroimage) product.heroimage = req.body.heroimage;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add/remove a single image to/from a product
const updateProductImages = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const { action, imageUrl } = req.body;

    if (action === 'add' && imageUrl) {
      if (!product.image.includes(imageUrl)) {
        product.image.push(imageUrl);
      }
    } else if (action === 'remove' && imageUrl) {
      product.image = product.image.filter(img => img !== imageUrl);
    } else {
      return res.status(400).json({ message: 'Invalid action or missing imageUrl' });
    }

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Export all controllers
export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductImages
};
