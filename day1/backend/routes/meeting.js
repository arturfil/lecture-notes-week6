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

router.get('/', getAllMeetings); // getAllMeetings // get_all_meetings // get-all-meetings
router.get('/meeting/:id', getMeetingById);
router.post('/meeting', validateJwt, createMeeting);
router.put('/meeting/:id',validateJwt, updateMeeting);
router.delete('/meeting/:id', validateJwt, deleteMeeting)

// MVC
// MODEL      => MongooseSchemas
// VIEW       => React
// CONTROLLER =>

module.exports = router;
