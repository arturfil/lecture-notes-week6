import { useState } from 'react';
import axios from 'axios';

const LoginView = () => {
  const [user, setUser] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSumbit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/api/auth/login', user);
    const { token } = response.data;
    localStorage.setItem('reservespot', JSON.stringify(token) );
    setUser({
      email: '',
      password: ''
    })
  }

  return (
    <div className="container mt-5">

      <form className="authForm">
        <h2>Login</h2>
        <input
          value={user.email}
          onChange={handleChange}
          className="form-control" 
          type="email"
          placeholder="Email"
          name="email" 
        />
        <input
          value={user.password}
          onChange={handleChange}
          className="form-control" 
          type="password"
          placeholder="Password"
          name="password" 
        />
        <button
          onClick={handleSumbit} 
          className="btn btn-primary form-control">
          Login
        </button>
      </form>

    </div>
  )
}

export default LoginView;