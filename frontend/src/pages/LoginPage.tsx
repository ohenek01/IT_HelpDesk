import { useState } from "react";
import "../styling/loginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if(!email || !password){
      alert('Fields can not be empty');
    }
    const userData = { email, password };

    axios.post('http://localhost:3001/login', userData)
    .then(res =>{
      if(res.data.status === 'Ok'){
        alert('Signed up')
        navigate("/Dashboard")
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
        <h2>Login</h2>
        <form>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account...? <b onClick={()=>{navigate("/SignUpPage")}} style={{ cursor: "pointer" }}>SignUp</b></p>
      </div>
    </div>
  );
};

export default LoginPage;