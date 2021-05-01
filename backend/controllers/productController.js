import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @des Fetch all products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // res.status(401);
  // throw new Error('Not Authorize');
  res.json(products);
});

// @des Fetch single products
// @route GET /api/products
// @access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(400).json({ message: 'Product not Found' });
  }
});

// @des Delete a products
// @route DELETE /api/products
// @access Private/admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(400).json({ message: 'Product not Found' });
  }
});

export { getProducts, getProductById, deleteProduct };
