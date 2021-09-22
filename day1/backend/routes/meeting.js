const express = require("express");
const {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meetingController");
const { validateJwt } = require("../middlewares/validateJwt");
const router = express.Router();

router.get('/', getAllMeetings);
router.get('/meeting/:id', getMeetingById);
router.post('/meeting', createMeeting);
router.put('/meeting/:id', updateMeeting);
router.delete('/meeting/:id', deleteMeeting)

// MVC
// MODEL      => MongooseSchemas
// VIEW       => React
// CONTROLLER =>

module.exports = router;
