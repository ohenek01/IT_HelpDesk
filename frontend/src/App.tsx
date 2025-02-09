import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import HelpDeskLanding from "./helpDeskLanding";
import HomePage from "./pages/HomePage";
import Dashboard from "./homeComponents/Dashboard";
import LiveChat from "./homeComponents/LiveChat";
import Setting from "./homeComponents/Setting";
import Ticket from "./homeComponents/Ticket";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Ticket" element={<Ticket />} />
          <Route path="LiveChat" element={<LiveChat />} />
          <Route path="Setting" element={<Setting />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;