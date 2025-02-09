import { useState } from "react";
import "../styling/loginPage.css";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Profile</h2>
        <form>
          <p style={{ textAlign: "left" }}>First Name</p>
          <input
            type="text"
            placeholder="Enter your first Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <p style={{ textAlign: "left" }}>Last Name</p>
          <input
            type="text"
            placeholder="Enter your last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <p style={{ textAlign: "left" }}>Profile Picture</p>
          {profilePic && <img src={profilePic} alt="Profile Preview" className="profile-preview" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />}
          <input type="file" accept="image/*" id="fileInput" style={{ display: "none" }} onChange={handleImageChange} />
          <button type="button" onClick={() => document.getElementById("fileInput").click()}>
            Select Profile Picture
          </button>
          <button type="submit" style={{marginTop:20}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
