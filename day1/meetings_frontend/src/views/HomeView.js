import { useEffect, useState } from 'react';
import axios from 'axios';

const HomeView = () =>{ 
  const [meetings, setMeetings] = useState([]);
  const apiUrl = 'http://localhost:5000/api'; 

  useEffect(() => {
    getMeetings();
  }, [])

  const getMeetings = async () => {
    const response = await axios.get(`${apiUrl}/meetings`);
    setMeetings(response.data);
  }

  return (
    <div className="home mt-4">
      <h2>Meetings</h2>
      {meetings && meetings.map(meeting => (
        <h4 key={meeting._id}>{meeting.concept}</h4>
      ))}
    </div>
  );
}

export default HomeView