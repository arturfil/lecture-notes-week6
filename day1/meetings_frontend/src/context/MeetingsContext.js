import axios from "axios";
import { useState, useEffect, createContext } from "react";

// Create Context variable
export const MeetingsContext = createContext({});

// Context Function (like all order components)
const MeetingsProvider = ({children}) => {
  // meetings arrays
  const [meetings, setMeetings] = useState([]);
  // single meeting func
  const [meeting, setMeeting] = useState({});
  const apiUrl = 'http://localhost:5000/api'
  
  // functions
  useEffect(() => {
    getMeetings();
  }, []);

  const addMeeting = (obj) => {
    setMeetings([...meeting, obj])
  }

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
      setMeetings,
      addMeeting,
      getMeetingById
    }}>
      {children}
    </MeetingsContext.Provider>
  )

}

export default MeetingsProvider;