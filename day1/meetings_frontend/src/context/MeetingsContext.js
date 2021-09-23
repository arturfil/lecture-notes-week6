import axios from "axios";
import { useState, useEffect, createContext } from "react";

// Create Context variable
export const MeetingsContext = createContext({});

// Context Function (like all order components)
const MeetingsProvider = ({children}) => {
  const [meetings, setMeetings] = useState([]);
  const [meeting, setMeeting] = useState({});
  const apiUrl = 'http://localhost:5000/api'
  
  // functions
  useEffect(() => {
    getMeetings();
  }, []);

  const getMeetings = async () => {
    const response = await axios.get(`${apiUrl}/meetings`);
    setMeetings(response.data);
    return response.data
  }

  const getMeetingById = async (id) => {
    const response = await axios.get(`${apiUrl}/meetigs/meeting/${id}`);
    setMeeting(response.data);
    return response.data;
  }

  // Provider
  return (
    <MeetingsContext.Provider value={{
      meetings,
      getMeetings,
      getMeetingById
    }}>
      {children}
    </MeetingsContext.Provider>
  )

}

export default MeetingsProvider;