const express = require("express");
const { check } = require("express-validator");
// controller imports
const {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meetingController");

const { validateFields } = require("../middlewares/validateFields");
// jwt middleware
const { validateJwt } = require("../middlewares/validateJwt");
const router = express.Router();

router.get("/", getAllMeetings); // getAllMeetings // get_all_meetings // get-all-meetings

router.get("/meeting/:id", getMeetingById);

router.post("/meeting", [
    validateJwt,
    check("concept", "Name field is required").not().isEmpty(),
    check("duration", "Duration of the meeting is required").not().isEmpty(),
    check("date", "A date is required for a meeting").not().isEmpty(),
    check("users", "At least one user is required for a meeting").isLength({min: 1}),
    check("startingTime", "You need to decalre a starting time").not().isEmpty(),
    validateFields
  ], 
createMeeting);

router.put("/meeting/:id", validateJwt, updateMeeting);

router.delete("/meeting/:id", validateJwt, deleteMeeting);

// MVC
// MODEL      => MongooseSchemas
// VIEW       => React
// CONTROLLER =>

module.exports = router;
