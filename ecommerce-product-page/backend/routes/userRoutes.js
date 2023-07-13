const express = require('express');
const { registerUser, loginUser, updateUser } = require('../controllers/userControllers');
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/update/:id').put(updateUser)

module.exports = router;