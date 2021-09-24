import { useContext, useState } from "react";
import { MeetingsContext } from "../context/MeetingsContext";
import useForm from "../hooks/useForm";

const AddMeetingView = () => {
  const { meetings, addMeeting, setMeetings } = useContext(MeetingsContext);

  const { concept, startingTime, date, attendees, duration, handleChange, resetForm} = useForm(
    {
      concept: '',
      startingTime: '',
      date: '',
      attendees: '',
      duration: ''
    }
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMeeting = {
      concept,
      startingTime,
      date,
      attendees,
      duration
    }
    setMeetings([...meetings, newMeeting])
  }

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Add Meeting View</h2>
        <input
          onChange={handleChange}
          placeholder="concept"
          value={concept} 
          className="form-control" 
          type="text" 
          name="concept"
        />
        <input
          onChange={handleChange}
          placeholder="starting Time"
          value={startingTime} 
          className="form-control" 
          type="text" 
          name="startingTime"
        />
        <input
          onChange={handleChange}
          placeholder="date"
          value={date} 
          className="form-control" 
          type="date" 
          name="date"
        />
        <input
          onChange={handleChange}
          placeholder="attendees"
          value={attendees} 
          className="form-control" 
          type="text" 
          name="attendees"
        />
        <input
          onChange={handleChange}
          placeholder="duration"
          value={duration} 
          className="form-control" 
          type="text" 
          name="duration"
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Add Meeting
        </button>
      </form>

      { meetings.map((meeting, i) => (
        <h4 key={i}>{meeting.concept}</h4>
      ))}
    </div>
  )
}

export default AddMeetingView;