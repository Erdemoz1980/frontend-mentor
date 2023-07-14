const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

//@desc  Registers a new user
//@route POST api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, lastName, email, password, address } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'An account is already registered with your email' })
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
      address: user.address
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
});

//@desc  Logs in user
//@route POST api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || (user.password !== password)) {
    res.status(401)
    throw new Error('Invalid email or password!')
  } else {
    res.status(200).json(user)
  }
});

//@desc  Updates user profile
//@route PUT api/users/update/:id
//@access Public
const updateUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const update = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, update, { new: true });
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404)
      throw new Error('Unable to update user!')
    }
});

module.exports = {
  registerUser,
  loginUser,
  updateUser
}
