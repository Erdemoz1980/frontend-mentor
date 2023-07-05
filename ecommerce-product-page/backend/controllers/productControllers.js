const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel')

//@desc Fetches all products
//@route GET api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
    res.status(200).json(products)
})

//@desc Fetches a single product
//@route GET api/products/:id
//@access Public
const getProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please include the product text in the body!')
  }
  res.status(200).json({message:`This the product No:${req.params.id}`})
})

//@desc Creates a product
//@route POST api/products
//@access Public
const createProduct = asyncHandler(async (req, res) => {
  res.status(201).json({message:'A new product has been created'})
})

//@desc Updates a single product
//@route PUT api/products/:id
//@access Private
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({message:`The product No:${req.params.id} has updated`})
})

//@desc Delete a single product
//@route DELETE api/products/:id
//@access Private
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({message:`The product No:${req.params.id} has been deleted`})
})

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}


