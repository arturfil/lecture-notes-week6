const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields')

const { userSignUp, userLogin } = require('../controllers/userController');

// Signup
router.post('/signup', [
  check("name", "Name field is required").not().isEmpty(),
  check("email", "Must be a valid Email").isEmail(),
  check("password", "Password must be 8 characters long with capital letter & Symbol")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
  // ( [a-z] [A-Z] ^[0-9a-zA-Z] {8,} )
  // lowercase, uppercase, (is a character) => isNot => numbers&lowercase&uppercase, minLength = 8
  validateFields
] ,userSignUp);

// Login
router.post('/login', userLogin)

module.exports = router;