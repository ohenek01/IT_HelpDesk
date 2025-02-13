import { useState } from "react";
import "../styling/loginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(!email || !password){
      alert('Fields can not be empty');
    }
    const userData = { email, password };

    axios.post('http://localhost:3001/register', userData)
    .then(res =>{
      if(res.data.status === 'OK'){
        navigate("/LoginPage")
      }
    })
    .catch(error => {
      console.error(error);
      alert('Something went wrong')
    })
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>SignUp</h2>
        <form >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={()=>{navigate("/Profile")}}>SignUp</button>
        </form>
        <p>Already have an account... <b onClick={()=>handleSubmit()} style={{ cursor: "pointer" }}>Login</b></p>
      </div>
    </div>
  );
};

export default SignUpPage;