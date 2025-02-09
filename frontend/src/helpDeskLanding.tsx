import './helpDesk.css'
import { useNavigate } from "react-router-dom";
import background from './assets/background.jpg';
import brandLogo from './assets/brandlogo.jpg';  // Adjust the path based on your folder structure

const HelpDeskLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="helpdesk-container" style={{ backgroundImage: `url(${background})` }}>
      <header className="helpdesk-header">
        <h1 className="text-xl font-bold">NAME OF SITE</h1>
        <nav className="helpdesk-header nav a">
          <a href="#" >Home</a>
          <a href="#" >About Us</a>
          <a href="#" >Work</a>
          <a href="#" >Info</a>
          <button className="helpdesk-button" onClick={()=> navigate("/HomePage")}>Get Started</button>
        </nav>
      </header>
      <main className="helpdesk-main">
        <div>
        <h2 className="helpdesk-title">Help Desk Support</h2>
        <p className="helpdesk-description">
        Centralized service or support system designed to assist users<br/> with technical or operational issues.
    
        </p>
        <button className="helpdesk-button"  onClick={() => navigate("/HomePage")}>Learn More</button>
        </div>
        {/* Image on the right */}
        <div className="helpdesk-image">
        <img src={brandLogo} alt="Help Desk Support" />

        </div>
      </main>
    </div>
  );
};

export default HelpDeskLanding;