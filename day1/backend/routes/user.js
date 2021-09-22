const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields')

const { userSignUp, userLogin } = require('../controllers/userController');

// Signup
router.post('/signup', [
  check("name", "Name field is required").not().isEmpty(),
  check("email", "Must be a valid Email").isEmail(),
  check("password", "Password must be 8 characters long").isLength({min: 8}),
  validateFields
] ,userSignUp);

/* Login
  - check that emails exists
  - if that check passes
    - check that the req.body.password === User.password
  - if that passes then we return a JWT (a soup of letters);
*/
router.post('/login', userLogin)

module.exports = router;