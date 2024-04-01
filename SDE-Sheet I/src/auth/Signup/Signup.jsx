import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import axios from "axios"; // Import axios for HTTP requests
import "./styles.scss";
import backg from "../../assets/Backdrop.jpg";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
import { useRegister } from '../../context/ApiCalls'; // Import the useLogin hook

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { signup, loading, error } = useRegister();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    const body = {
      username: `${firstName} ${lastName}`,
      email,
      password
    };

    // Call the login function from the useLogin hook
    await signup('http://localhost:3000/api/auth/register', body);
    console.log(body);
  };

  return (
    <div className="Signup">
      <ContentWrapper>
        <div className="container">
          <div className="wrapper">
            <div className="opacity-layer" />
            <form 
            className="Form" 
            onSubmit={handleSignup}
            >
              <h1>Create An Account</h1>
              <div className="buttons">
                <button className="btn"><GoogleIcon/>Signup with Google</button>
                <button className="btn"> <GitHubIcon/>Signup with Github</button>
              </div>
              <div className="partition">
                <div className="line1"></div>
                <p>or, Register with email</p>
                <div className="line2"></div>
              </div>
              <div className="Grid">
                <input type="text" placeholder="First Name" name="firstName" onChange={handleInputChange} />
                <input type="text" placeholder="Last Name" name="lastName" onChange={handleInputChange} />
                <input type="email" placeholder="Email" name="email" onChange={handleInputChange} />
                <input type="password" placeholder="Password" name="password" onChange={handleInputChange} />
              </div>
              <div className="createBtn">
                <button className="btn" disabled={loading}> {loading ? "Creating Account..." : "Create Account"}</button>
                <EastIcon/>
              </div>
              <div className="line" />
              <div className="already">
                <p>
                  Already have an account? <a href="/Dsaz/Signin">Sign In</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Signup;
