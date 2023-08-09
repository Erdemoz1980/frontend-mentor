const { OrderModel } = require('../models/models');
const { sanitizeString } = require('../utilities/utilities');
const asyncHandler = require('express-async-handler');

// Create a new order
// POST api/orders
// Public
const createOrder = asyncHandler(async (req, res) => {
  const { user, orderItems, shippingAddress, shippingPrice, taxPrice, totalPrice, paymentType  } = req.body;
  
  const sanitizedOrderItems = orderItems.map(item => {
    return {
      name: sanitizeString(item.name),
      qty: item.qty,
      price: item.price,
      product: item.product
    }
  })

  const newOrder = await OrderModel.create({user, orderItems:sanitizedOrderItems, shippingAddress, shippingPrice, taxPrice, totalPrice, paymentType})

  if (newOrder) {
    res.status(201).json(newOrder)
  } else {
    res.status(400)
    throw new Error('Order error, please try again')
  }

});

//@descGET fetches a user's all orders
//@route /api/orders/:id
//@access Private

const getOrderList = asyncHandler(async (req, res) => {
  const orders = await OrderModel.find({ user: req.params.id });

  if (orders) {
    res.status(200).json({orders});
  } else {
    res.status(404).json({message:'No previous orders found!'})
  }
})


module.exports = {createOrder, getOrderList}