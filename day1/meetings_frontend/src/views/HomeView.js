import { useEffect, useState } from 'react';
import axios from 'axios';

const HomeView = () =>{ 
  const [meetings, setMeetings] = useState([]);
  const [error, setError] = useState('');
  const apiUrl = 'http://localhost:5000/api'; 

  return (
    <div className="home mt-4">
      <h2>Meetings</h2>
      {meetings && meetings.map(meeting => (
        <h4 key={meeting._id}>{meeting.concept}</h4>
      ))}
      {meetings.length === 0 && (
        <h2>{error}</h2>
      )}
    </div>
  );
}

export default HomeView