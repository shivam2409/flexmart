import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModels.js';

const router = express.Router();

// @des Fetch all products
// @route GET /api/products
// @access Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.json(products);
  })
);

// @des Fetch single products
// @route GET /api/products
// @access Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(400).json({ message: 'Product not Found' });
    }
  })
);

export default router;
