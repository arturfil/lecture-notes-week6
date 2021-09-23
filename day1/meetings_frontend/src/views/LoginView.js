const LoginView = () => {
  return (
    <div className="container mt-5">

      <form className="authForm">
        <h2>Login</h2>
        <input
          className="form-control" 
          type="email"
          placeholder="Email"
          name="eamil" 
        />
        <input
          className="form-control" 
          type="password"
          placeholder="Password"
          name="password" 
        />
        <button className="btn btn-primary form-control">
          Login
        </button>
      </form>

    </div>
  )
}

export default LoginView;