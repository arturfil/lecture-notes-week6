const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: "meeting from route"})
})

module.exports = router;