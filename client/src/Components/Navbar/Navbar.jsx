// Navbar.js

import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/Dsaz logo.svg";
import pfp from "../../assets/PFP 1.jpg";
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setTopic } from "../../context/TopicSlice";
import Profile from "./Profile";
const Navbar = () => {
  const [navbarState, setNavbarState] = useState({
    show: "top",
    scroll: 0,
    profileVisible: false,
  });
  const dispatch = useDispatch();
  const { show, scroll, profileVisible, searchValue } = navbarState;
  const isLogin = useSelector((state) => state.user.isLogin);
  const isHomepage = useSelector((state) => state.Topics.isHomepage);
  const navigate = useNavigate();
  const profileRef = useRef(null);
  useEffect(() => {
    const NavbarScroll = () => {
      const newScroll = window.scrollY;
      setNavbarState(prevState => ({
        ...prevState,
        show: newScroll > 200 ? (newScroll > scroll ? "show" : "top") : "top",
        scroll: newScroll
      }));
    };

    window.addEventListener("scroll", NavbarScroll);
    return () => window.removeEventListener("scroll", NavbarScroll);
  }, [scroll]);

  const handleLogin = () => {
    navigate("/Dsaz/Signin");
  }

  const handleSignup = () => {
    navigate("/Dsaz/Signup");
  }

  const handleProfileClick = () => {
    setNavbarState(prevState => ({
      ...prevState,
      profileVisible: !profileVisible
    }));
  }

  const handleSearchChange = (event) => {
    const { value } = event.target;
    dispatch(setTopic(value));
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
                  <input type="text" placeholder={isHomepage ? "Search for a topic" : "Search for a Problem"} value={searchValue} onChange={handleSearchChange} />
                  <SearchIcon className="searchIcon" />
                </div>
                <div className="pfp" onClick={handleProfileClick} ref={profileRef}>
                  <img src={pfp} alt="" />
                </div>
                {profileVisible && <Profile />}
              </>
            ) : (
              <div className="buttons">
                <button className="login" onClick={handleLogin}> <LoginIcon /> Login</button>
                <button className="signup" onClick={handleSignup}> <VpnKeyIcon /> Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Navbar;
