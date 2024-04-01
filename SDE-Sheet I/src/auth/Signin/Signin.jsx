import React, { useState, useContext, useEffect } from 'react';
import './styles.scss';
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
import { useLogin } from '../../context/ApiCalls'; // Import the useLogin hook
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector from react-redux
import { setIsLogin } from '../../context/userSlice'; // Import setIsLogin action

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin(); // Initialize the useLogin hook
  const isLogin = useSelector((state) => state.user.isLogin); // Get isLogin from Redux state 
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const res = await login('http://localhost:3000/api/auth/login', { email, password });
      if(res){
        dispatch(setIsLogin(true)); // Dispatch action to set isLogin to true
      }else{
        console.log(error);
      }
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/Dsaz/');
    }
  }, [isLogin, navigate]);

  return (
    <div className='Signin'>
      <ContentWrapper>
        <div className='container'>
          <div className='wrapper'>
            <div className='opacity-layer' />
            <form onSubmit={handleLogin}>
              <h1>Login to Dsaz</h1>
              <div className='buttons'>
                <button className='btn'><GoogleIcon />Signin with Google</button>
                <button className='btn'> <GitHubIcon />Signin with Github</button>
              </div>
              <div className='partition'>
                <div className='line1'></div>
                <p>or, Login with email</p>
                <div className='line2'></div>
              </div>
              <div className='Grid'>
                <input type='email' placeholder='Email' name='email' value={email} onChange={handleInputChange} />
                <input type='password' placeholder='Password' name='password' value={password} onChange={handleInputChange} />
              </div>
              <div className='createBtn'>
                <button disabled={loading}> {loading ? "Logging in..." : "Login now"} </button>
                <EastIcon />
              </div>
              <div className='line' />
              <div className='already'>
                <p>
                  Don't have an account? <a href='/Dsaz/Signup'>Sign Up</a>
                </p>
              </div>
              {error && <div className='error'>{error.message}</div>}
            </form>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Signin;
