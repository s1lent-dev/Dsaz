import React from "react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import "./styles.scss";
import backg from "../../assets/Backdrop.jpg";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from "react-router-dom";
const Signup = () => {

    const navigate = useNavigate();
    const handlelogin = () => {
        navigate("/Dsaz/Signin");
    }
  return (
    <div className="Signup">
      <ContentWrapper>
        <div className="container">
          <div className="wrapper">
            <div className="opacity-layer" />
            <form action="" >
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
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="createBtn">
              <button> Create Account </button>
              <EastIcon/>
              </div>
              <div className="line" />
              <div className="already">
                <p>
                  Already have an account? <a href="/Dsaz/Signin" onClick={handlelogin}>Sign In</a>
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
