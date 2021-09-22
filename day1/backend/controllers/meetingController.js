const Meeting = require('../models/Meeting')

const getAllMeetings = async (req, res) => {
  const meetings = await Meeting.find().populate("users", "name");
  try {
    return res.status(200).json(meetings);
  } catch (error) {
    return res.status(500).json({message: "Server Error"});
  }
}

const getMeetingById = async (req, res) => {
  const { id } = req.params;
  const meeting = await Meeting.findById(id);
  try {
    return res.status(200).json(meeting);
  } catch (error) {
    return res.status(400).json({message: "User not found"});
  }
}

const createMeeting = async (req, res) => {
  const meeting = await Meeting.create(req.body);
  try {
    return res.status(201).json(meeting);
  } catch (error) {
    return res.status(500).json({message: "Coudn't create the meeting"})
  }
}

const updateMeeting = async (req, res) => {
  const { id } = req.params;
  const meeting = await Meeting.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(meeting);
  } catch (error) {
    return res.status(500).json({message: "Cound't update meeting"});
  }
}

const deleteMeeting = async (req, res) => {
  const { id } = req.params;
  await Meeting.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Successfully Deleted The meeting"});
  } catch (error) {
    return res.status(500).json({message: "Couldn't delete the meeting"});
  }
}

module.exports = {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting
}