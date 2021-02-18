import asyncHandler from 'express-async-handler';
import Product from '../models/productModels';

// @des Fetch all products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
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

export default { getProducts, getProductById };
