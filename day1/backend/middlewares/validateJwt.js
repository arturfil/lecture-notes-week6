const jwt = require('jsonwebtoken');

const User = require('../models/User');

const validateJwt = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({message: "Token not found"});
  }
  try {
    const { uid } = jwt.verify(token, 'aljsfdkurwieoqlksdajoiqw824338923');
    req.user = await User.findById(uid);
    next();
  } catch (error) {
    res.status(401).json({message: "Invalid token"});
  }
}

const isAdmin = async (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({message: "Need validation first"});
  }
  const { role, name} = req.user;
  if (role !== 'ADMIN') {
    return res.status(401).json({meesage: `User ${name} does not have privileges for this operation`});
  }
  next();
}

const hasRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(500).json({message: "Need validation first"});
    }
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({message: `The user doesn't contain any of these roles [${roles}]`})
    }
    next();
  }
}

module.exports = {
  validateJwt,
  isAdmin,
  hasRole
}