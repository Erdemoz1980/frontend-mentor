const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');


//@desc  Registers a new user
//@route Post api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, lastName, email, password, address } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
   return res.status(400).json({message:'An account is already registered with your email'})
  }

  const user = await User.create({
  name, lastName, email, password, address
  });
  
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      address:user.address
    })
  } else {
    res.status(400).json({message:'Invalid user data'})
  }
})

//@desc  Logs in a new user
//@route Post api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user.password !== password) {
    res.status(401).json({ message: 'Invalid email or password!' })
  } else {
    res.status(200).json(user)
  }

});

module.exports = {
  registerUser,
  loginUser
}
