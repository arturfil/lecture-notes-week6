import { useState } from "react";

const AddMeetingView = () => {
  const [meeting, setMeeting] = useState(
    {
      concept: '',
      startingTime: '',
      date: '',
      attendees: '',
      duration: ''
    }
  )

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Add Meeting View</h2>
        <input
          placeholder="concept"
          value={meeting.concept} 
          className="form-control" 
          type="text" 
          name="concept"
        />
        <input
          placeholder="starting Time"
          value={meeting.startingTime} 
          className="form-control" 
          type="text" 
          name="startingTime"
        />
        <input
          placeholder="date"
          value={meeting.date} 
          className="form-control" 
          type="text" 
          name="date"
        />
        <input
          placeholder="attendees"
          value={meeting.attendees} 
          className="form-control" 
          type="text" 
          name="attendees"
        />
        <input
          placeholder="duration"
          value={meeting.duration} 
          className="form-control" 
          type="text" 
          name="duration"
        />
        <button className="btn btn-primary">
          Add Meeting
        </button>
      </form>
    </div>
  )
}

export default AddMeetingView;