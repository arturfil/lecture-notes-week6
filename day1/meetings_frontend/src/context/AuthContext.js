import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [loggedIn, setLogged] = useState(false);
  const [user, setUser] = useState({
    email: '',
    role: '',
    name: ''
  })
  const apiUrl = 'http://localhost:5000/api';

  useEffect(() => {
    checkLoggedIn()
  }, [])

  const checkLoggedIn = () => {
    const token = JSON.parse(localStorage.getItem('reservespot'));
    if (!token) {
      setLogged(false)
    } else {
      setLogged(true)
    }
  }

  const handleLogin = async (obj) => {
    const response = await axios.post(`${apiUrl}/auth/login`, obj);
    const { token, ...user } = response.data;
    setUser(user);
    localStorage.setItem('reservespot', JSON.stringify(token) );
  }

  const logOut = async () => {
    await localStorage.removeItem('reservespot');
  }

  const getUserInfo = () => {

  }

  const isAdmin = () =>{ 

  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        handleLogin,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider