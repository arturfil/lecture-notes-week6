const jwt = require('jsonwebtoken');

const validateJwt = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({message: "Token not found"});
  }
  try {
    const { uid } = jwt.verify(token, 'aljsfdkurwieoqlksdajoiqw824338923');
    req.uid = uid;
  } catch (error) {
    res.status(401).json({message: "Invalid token"});
  }
  next();
}

module.exports = {
  validateJwt
}