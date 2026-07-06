import { Link } from "react-router-dom";
import "./Navbar.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>TaskFlow</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/tasks">Tasks</Link>
        </li>

        
      </ul>

      <button className="profile-btn">Profile</button>
    </nav>
  );
}

export default Navigation;