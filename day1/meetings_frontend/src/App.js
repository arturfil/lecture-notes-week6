import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
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
    <>
      <h2>Meetings</h2>
      {meetings && meetings.map(meeting => (
        <h4 key={meeting._id}>{meeting.concept}</h4>
      ))}
    </>
  );
}

export default App;
