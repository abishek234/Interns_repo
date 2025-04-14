import Product from '../models/Product.js';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Create a new product with hero image upload
const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Hero image is required' });
    }

    // Process uploaded hero image
    const heroimagePath = `/uploads/${req.file.filename}`;
    
    // Parse key points if provided
    let keyPoints = [];
    if (req.body.keyPoints) {
      try {
        keyPoints = JSON.parse(req.body.keyPoints);
      } catch (e) {
        keyPoints = req.body.keyPoints.split(',').map(point => point.trim());
      }
    }

    // Create new product
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      heroimage: heroimagePath,
      keyPoints: keyPoints,
      // Add any other fields from req.body as needed
    });

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
    
    // Update text fields
    if (req.body.title) product.title = req.body.title;
    if (req.body.description) product.description = req.body.description;
    
    // Update keyPoints if provided
    if (req.body.keyPoints) {
      try {
        product.keyPoints = JSON.parse(req.body.keyPoints);
      } catch (e) {
        product.keyPoints = req.body.keyPoints.split(',').map(point => point.trim());
      }
    }
    
    // Handle hero image update
    if (req.file) {
      // Delete old hero image if it exists
      if (product.heroimage) {
        const oldPath = path.join(__dirname, '..', product.heroimage.replace(/^\//, ''));
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      product.heroimage = `/uploads/${req.file.filename}`;
    }

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
    
    // Delete hero image from file system
    if (product.heroimage) {
      const heroPath = path.join(__dirname, '..', product.heroimage.replace(/^\//, ''));
      if (fs.existsSync(heroPath)) {
        fs.unlinkSync(heroPath);
      }
    }
    
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export all controllers
export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};