const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');


//@desc  Fetches userlist
//@route GET api/users
//@access Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  if (users) {
    res.status(200).json(users)
  } else {
     throw new Error('No users found!')
  }
})

//@desc  Registers a new user
//@route Post api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, lastName, email, password, address } = req.body;

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
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//@desc  Logs in a new user
//@route Post api/users
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error('No email or password entered')
  } else {
    const user = await User.findOne({ email });
    if (user.password !== password) {
      res.status(401).json({ message: 'Wrong password!' })
    } else {
      res.status(200).json(user)
    }
  }
});

module.exports = {
  getUsers,
  registerUser,
  loginUser
}
