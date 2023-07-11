const express = require('express');
const { registerUser, getUsers, loginUser } = require('../controllers/userControllers');
const router = express.Router()

router.route('/').post(registerUser).get(getUsers)
router.route('/login').post(loginUser)

module.exports = router;