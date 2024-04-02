import React, { useState, useEffect } from "react";
import "./styles.scss";
import img from "../../assets/PFP 1.jpg";
import CircularProgressBar from "../Progressbar/Progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin, logoutUser } from "../../context/userSlice"; // Import the action

const Profile = () => {
  const dispatch = useDispatch(); // Get dispatch function
  const isLogin = useSelector((state) => state.user.isLogin); // Get isLogin state
  const sheetData = useSelector((state) => state.sheet);
  const userData = useSelector((state) => state.user.userData);
  const [profileState, setProfileState] = useState({ questions: 0, solved: 0, easy: 0, medium: 0, hard: 0, totalEasy: 0, totalMedium: 0, totalHard: 0 });

  useEffect(() => {
    let totalQuestions = 0, totalSolved = 0, totalEasy = 0, totalMedium = 0, totalHard = 0, easy = 0, medium = 0, hard = 0;
    for (let i = 0; i < sheetData.length; i++) {
      totalQuestions += sheetData[i].totalQues;
      totalSolved += sheetData[i].solved;
      totalEasy += sheetData[i].totalEasy;
      totalMedium += sheetData[i].totalMedium;
      totalHard += sheetData[i].totalHard;
      easy += sheetData[i].easy;
      medium += sheetData[i].medium;
      hard += sheetData[i].hard;
    }
    setProfileState({
      questions: totalQuestions,
      solved: totalSolved,
      easy: easy,
      medium: medium,
      hard: hard,
      totalEasy: totalEasy,
      totalMedium: totalMedium,
      totalHard: totalHard,
    });
  }, [sheetData]);

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    localStorage.setItem("userData", JSON.stringify({}));
    dispatch(logoutUser());
  };
  

  console.log(isLogin)

  return (
    <div className="profile">
      <div className="container">
        <div className="top">
          <img src={img} alt="" />
          <div className="info">
            <h4>{userData.username}</h4>
            <p>Access all features with our premium subscription ! </p>
          </div>
        </div>
        <div className="mid">
          <div className="left">
            <div className="progress">
              <CircularProgressBar
                solved={profileState.solved}
                totalQues={profileState.questions}
              />
            </div>
          </div>
          <div className="right">
            <div className="typewiseprogress">
              <div className="easy">
                <div className="lable">
                  <h4>Easy</h4>
                  <span>{`${profileState.easy} / ${profileState.totalEasy} `}</span>
                </div>
                <ProgressBar
                  completed={profileState.easy}
                  maxCompleted={profileState.totalEasy}
                  isLabelVisible={false}
                  bgColor="rgb(0, 184, 163)"
                  width="150px"
                  height="7px"
                />
              </div>
              <div className="medium">
                <div className="lable">
                  <h4>Medium</h4>
                  <span>{`${profileState.medium} / ${profileState.totalMedium} `}</span>
                </div>
                <ProgressBar
                  completed={profileState.medium}
                  bgColor="rgb(255, 192, 30)"
                  maxCompleted={profileState.totalMedium}
                  isLabelVisible={false}
                  height="7px"
                  width="150px"
                />
              </div>
              <div className="hard">
                <div className="lable">
                  <h4>Hard</h4>
                  <span>{`${profileState.hard} / ${profileState.totalHard} `}</span>
                </div>
                <ProgressBar
                  completed={profileState.hard}
                  maxCompleted={profileState.totalHard}
                  isLabelVisible={false}
                  bgColor="rgb(239, 71, 67)"
                  height="7px"
                  width="150px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <ul>
            <li>
              {" "}
              <BookmarksIcon /> My Lists
            </li>
            <li>
              {" "}
              <DonutSmallIcon /> Progress
            </li>
            <li>
              {" "}
              <DarkModeIcon /> Appearance
            </li>
            <li>
              <LogoutIcon /> <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
