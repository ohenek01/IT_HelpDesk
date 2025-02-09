import { Outlet, Link } from "react-router-dom";
import "../styling/homePage.css";
import { useNavigate } from "react-router-dom";
import background from '../assets/background.jpg';

const HomePage = () => {
    const navigate = useNavigate();

  return (
    <div className="container">
      {/* Sidebar */}
      <nav className="sidebar">
        <h2>Help Desk</h2>
        <ul>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Ticket">Ticket</Link></li>
          <li><Link to="/LiveChat">LiveChat</Link></li>
          <li><Link to="/Setting">Setting</Link></li>
        </ul>
        <button onClick={() => navigate("/LoginPage")} style={{marginTop:50}}>Sign up</button> 
      </nav>

      {/* Main Content */}
      <div className="main-content" style={{ backgroundImage: `url(${background})` }}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
