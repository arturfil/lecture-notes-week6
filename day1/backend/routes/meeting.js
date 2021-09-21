const express = require('express');
const { getAllMeetings } = require('../controllers/meetinController');
const { validateJwt } = require('../middlewares/validateJwt');
const router = express.Router();

router.get('/', validateJwt, getAllMeetings);

// MVC
// MODEL      => MongooseSchemas
// VIEW       => React
// CONTROLLER => 

module.exports = router;