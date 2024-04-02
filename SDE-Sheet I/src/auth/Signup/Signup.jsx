import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRegister } from "../../context/ApiCalls"; // Import the useLogin hook
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Signup = () => {
  const navigate = useNavigate();
  const { signup, loading, error } = useRegister();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("*First Name is required"),
    lastName: Yup.string().required("*Last Name is required"),
    email: Yup.string()
      .email("*Invalid email address")
      .required("*Email is required"),
    password: Yup.string()
      .required("*Password is required")
      .test(
        "password-strength",
        "*Password must be at least 6 characters ",
        value => {
          // Check password strength
          const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
          const moderateRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          const weakRegex = /^(?=.*\d).{6,}$/;

          if (strongRegex.test(value)) {
            return true; // Strong password
          } else if (moderateRegex.test(value)) {
            return true; // Moderate password
          } else if (weakRegex.test(value)) {
            return true; // Weak password
          } else {
            return false; // Password doesn't meet criteria
          }
        }
      )
      .test(
        "password-length",
        "*Password must be at least 6 characters",
        value => value.length >= 6
      )
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    const { firstName, lastName, email, password } = values;
    const body = {
      username: `${firstName} ${lastName}`,
      email,
      password
    };
    try {
      // Call the signup function from the useRegister hook with values
      await signup("http://localhost:3000/api/auth/register", body);
      // Redirect after successful signup
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
      navigate("/Dsaz/Signin");
    }
  };

  

  

  return (
    <div className="Signup">
      <ContentWrapper>
        <div className="container">
          <div className="wrapper">
            <div className="opacity-layer" />
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="Form">
                  <h1>Create An Account</h1>
                  <div className="buttons">
                    <button className="btn">
                      <GoogleIcon />
                      Signup with Google
                    </button>
                    <button className="btn">
                      {" "}
                      <GitHubIcon />
                      Signup with Github
                    </button>
                  </div>
                  <div className="partition">
                    <div className="line1"></div>
                    <p>or, Register with email</p>
                    <div className="line2"></div>
                  </div>
                  <div className="Grid">
                    <div className="input-wrapper">
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="input-wrapper">
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="input-wrapper">
                      <Field type="email" name="email" placeholder="Email" />
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
                    <button
                      className="btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating Account..." : "Create Account"}
                    </button>
                    <EastIcon />
                  </div>
                  <div className="line" />
                  <div className="already">
                    <p>
                      Already have an account?{" "}
                      <a href="/Dsaz/Signin">Sign In</a>
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

export default Signup;
