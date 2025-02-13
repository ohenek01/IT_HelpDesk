import { useState } from "react";
import "../styling/loginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setProfilePic(URL.createObjectURL(file));
  //   }
  // };

  const handleSubmit = () => {
    const userData = {firstName, lastName};

    axios.put('http://localhost:3001/profile', userData)
    .then(res => {
      if(res.data.status === 'Ok'){
        navigate('/Dashboard')
      }
    })
  }

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
          {/* <p style={{ textAlign: "left" }}>Profile Picture</p>
          {profilePic && <img src={profilePic} alt="Profile Preview" className="profile-preview" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />}
          <input type="file" accept="image/*" id="fileInput" style={{ display: "none" }} onChange={handleImageChange} />
          <button type="button" onClick={() => document.getElementById("fileInput").click()}>
            Select Profile Picture
          </button> */}
          <button type="submit" style={{marginTop:20}} onClick={() => handleSubmit()}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
