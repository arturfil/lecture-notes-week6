const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const testEmail = await User.findOne({email: req.body.email});
  if (testEmail) {
    return res.status(500).json({message: "Email already exists"})
  }
  const userToCreate = await new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    userToCreate.password = bcrypt.hashSync(req.body.password, salt);
    // 200 OK/Succesfull
    userToCreate.save();
    return res.status(201).json(userToCreate);
  } catch (error) {
    // 500 - Server error
    return res.status(500).json({message: "Couldn't create user"});
  }
})

module.exports = router;