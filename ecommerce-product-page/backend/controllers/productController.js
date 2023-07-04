const asyncHandler = require('express-async-handler');
//@desc Get products
//@route  GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'These are your products!' })
})

//@desc Create product
//@route  POST /api/products
//@access Private
const createProduct = asyncHandler (async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({message:'New product created!'})
})

//@desc Update products
//@route  Put /api/products/:id
//@access Private
const updateProduct = asyncHandler (async (req, res) => {
  res.status(201).json({ message: `Product id:${req.params.id} updated` })
});

//@desc delete product
//@route  DELETE /api/products/:id
//@access Private
const deleteProduct = asyncHandler (async (req, res) => {
  res.status(200).json({message:`Product id:${req.params.id} deleted!`})
})


module.exports = {
  getProducts,
  updateProduct,
  createProduct,
  deleteProduct
}