const Meeting = require('../models/Meeting')

const getAllMeetings = async (req, res) => {
  const meetings = await Meeting.find();
  try {
    return res.status(200).json(meetings);
  } catch (error) {
    return res.status(500).json({message: "Server Error"});
  }
}

module.exports = {
  getAllMeetings
}