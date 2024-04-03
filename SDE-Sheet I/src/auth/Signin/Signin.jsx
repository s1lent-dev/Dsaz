import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.scss";
import * as Yup from "yup";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLogin } from "../../context/ApiCalls"; // Import the useLogin hook
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch from react-redux
import { setIsLogin } from "../../context/userSlice"; // Import setIsLogin action

const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error } = useLogin(); // Initialize the useLogin hook
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate();
  
  
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("*Invalid email").required("*Email is required"),
    password: Yup.string().required("*Password is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await login("http://localhost:3000/api/auth/login", values);
      if (res) {
        dispatch(setIsLogin(true)); // Dispatch action to set isLogin to true
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  
  useEffect(() => {
    if (isLogin) {
      navigate('/Dsaz/');
    }
  }, [isLogin, navigate]);

  return (
    <div className="Signin">
      <ContentWrapper>
        <div className="container">
          <div className="wrapper">
            <div className="opacity-layer" />
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form className="Form">
                  <h1>Login to Dsaz</h1>
                  <div className="buttons">
                    <button className="btn">
                      <GoogleIcon />
                      Signin with Google
                    </button>
                    <button className="btn">
                      {" "}
                      <GitHubIcon />
                      Signin with Github
                    </button>
                  </div>
                  <div className="partition">
                    <div className="line1"></div>
                    <p>or, Login with email</p>
                    <div className="line2"></div>
                  </div>
                  <div className="Grid">
                    <div className="input-wrapper">
                      <Field type="email" placeholder="Email" name="email" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="input-wrapper">
                      <div className="input">
                      <Field
                        type={showPassword ? "text" : "password"} // Toggle password visibility based on state
                        name="password"
                        placeholder="Password"
                      />
                      <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </span>
                      </div>
                      <ErrorMessage
                        name="password"
                        render={msg => <div className="error">{msg}</div>}
                      />
                    </div>
                  </div>

                  <div className="createBtn">
                    <button type="submit" disabled={isSubmitting}>
                      {" "}
                      {isSubmitting ? "Logging in..." : "Login now"}{" "}
                    </button>
                    <EastIcon />
                  </div>
                  <div className="line" />
                  <div className="already">
                    <p>
                      Don't have an account? <a href="/Dsaz/Signup">Sign Up</a>
                    </p>
                  </div>
                  {error && <div className="error">{error.message}</div>}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Signin;
