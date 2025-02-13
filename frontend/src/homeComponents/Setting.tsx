import { useState } from "react";
import "../styling/setting.css";

const Setting = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`settings-container ${darkMode ? "dark" : ""}`}>
      <h1 className="settings-title">Settings</h1>
      <div className="settings-section">
        <h3>Account Settings</h3>
        <div className="setting-item">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="setting-item">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
      </div>

      <div className="settings-section">
        <h3>Preferences</h3>
        <div className="setting-item">
          <label htmlFor="notifications">Enable Notifications</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={handleNotificationChange}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="darkMode">Enable Dark Mode</label>
          <input
            type="checkbox"
            id="darkMode"
            checked={darkMode}
            onChange={handleDarkModeChange}
          />
        </div>
      </div>

      <div className="settings-footer">
        <button className="save-button">Save Changes</button>
      </div>
    </div>
  );
};

export default Setting;
