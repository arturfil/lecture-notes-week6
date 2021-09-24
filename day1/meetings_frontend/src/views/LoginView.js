import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import useForm from '../hooks/useForm';

const LoginView = () => {
  const { handleLogin } = useContext(AuthContext);
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

  const submitLogin = async (event) => {
    event.preventDefault();
    await handleLogin(user);
    setUser({
      email: '',
      password: ''
    })
  }

  return (
    <div className="container mt-5">

      <form className="form">
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
          onClick={submitLogin} 
          className="btn btn-primary form-control">
          Login
        </button>
      </form>

    </div>
  )
}

export default LoginView;