import { useContext } from 'react';
import { MeetingsContext } from '../context/MeetingsContext';

const HomeView = () =>{ 
  const { meetings } = useContext(MeetingsContext)

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