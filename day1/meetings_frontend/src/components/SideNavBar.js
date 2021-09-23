import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/asdfasd">Error</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNavBar;