import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext'

const SideNavBar = () => {
  const { loggedIn, logOut } = useContext(AuthContext)
  console.log(loggedIn)

  return (
    <div className="navbar">
      <ul>
        <li>
          {loggedIn && (
            <h2> Hello Name</h2>
          )}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/asdfasd">Error</Link>
        </li>
        
        { loggedIn ? (
          <li onClick={logOut}>
            Log Out
          </li>

        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SideNavBar;