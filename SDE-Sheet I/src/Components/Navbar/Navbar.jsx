import React from "react";
import "./styles.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/Dsaz logo.svg";
import pfp from "../../assets/PFP 1.jpg";
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useState, useEffect } from "react";
const Navbar = ({setisLogin}) => {
  const [show, setShow] = useState("top");
  const [scroll, setScroll] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const NavbarScroll = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > scroll) {
        setShow("show");
      } else {
        setShow("top");
      }
    }
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", NavbarScroll);
    return () => window.removeEventListener("scroll", NavbarScroll);
  }, [scroll]);

  const handlelogin = () => {
    setIsLogin(true);
    setisLogin(true);
  }
  return (
    <header className={`Navbar ${show}`}>
      <ContentWrapper>
        <div className="container">
          <div className="left">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="menu">
              <ul>
                <li>Dsa Sheets</li>
                <li>Dsa Roadmap</li>
                <li>SDE Sheets</li>
                <li>CP Sheets</li>
              </ul>
            </div>
          </div>
          <div className="right">
            {isLogin ? (
              <>
                <div className="searchbar">
                  <input type="text" placeholder="Search for a topic" />
                  <SearchIcon className="searchIcon" />
                </div>
                <div className="pfp">
                  <img src={pfp} alt="" />
                </div>
              </>
            ) : (
              <div className="buttons">
                <button className="login" onClick={handlelogin}> <LoginIcon /> Login</button>
                <button className="signup"> <VpnKeyIcon /> Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Navbar;
