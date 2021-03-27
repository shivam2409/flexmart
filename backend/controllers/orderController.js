import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @des Create all products
// @route GET /api/products
// @access Public

const addOrderItems = asyncHandler(async (req, res) => {
  //Getting data from frontend fields
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  //check if data is there or fileds are not empty

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;

    //Creating new order
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    //Saving order sending promise
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @des Get Order by ID
// @route GET /api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

export { addOrderItems, getOrderById };
