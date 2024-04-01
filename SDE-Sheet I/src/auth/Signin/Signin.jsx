import React from 'react'
import './styles.scss'
import ContentWrapper from '../../Components/ContentWrapper/ContentWrapper'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
const Signin = () => {
  return (
    <div className='Signin'>
      <ContentWrapper>
      <div className="container">
          <div className="wrapper">
            <div className="opacity-layer" />
            <form action="" >
              <h1>Signin to Dsaz</h1>
              <div className="buttons">
                <button className="btn"><GoogleIcon/>Signin with Google</button>
                <button className="btn"> <GitHubIcon/>Signin with Github</button>
              </div>
              <div className="partition">
                <div className="line1"></div>
                <p>or, Login with email</p>
                <div className="line2"></div>
              </div>
              <div className="Grid">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="createBtn">
              <button> Login now </button>
              <EastIcon/>
              </div>
              <div className="line" />
              <div className="already">
                <p>
                  Don't have a account ? <a href="/Dsaz/Signup">Sign Up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Signin
