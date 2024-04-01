import React, { useState } from "react";
import "./styles.scss";
import Progressbar from "../Sheet/Progressbar/Progressbar";
import BackdropImage from "../../assets/Backdrop.jpg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ProgressBar from "@ramonak/react-progress-bar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SingleQuestion from "./SingleQuestion";

const Questions = () => {

  const { id } = useParams();
  const sheetData = useSelector((state) => state.sheet);

  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  const [solved, setSolved] = useState(0);

  const getBackground = (problemId) => {
    return problemId % 2 === 0 ? "grey" : "black";
  };

  const renderQuestions = (data) => {
    return (
      <>
        <div className="container">
          <div className="backdrop">
            <img src={BackdropImage} alt="" />
          </div>
          <div className="opacity-layer" />
          <ContentWrapper>
            <div className="content">
              <div className="left">
                <img src={data.img} alt="" />
              </div>
              <div className="right">
                <div className="top">
                  <h1>{data.topic}</h1>
                  <ul>
                    <li>Easy: {data.easy}</li>
                    <li>Medium: {data.medium}</li>
                    <li>Hard: {data.hard}</li>
                  </ul>
                  <p className="overview">{data.overview}</p>
                  <div className="buttons">
                    <button className="first">
                      <QuestionAnswerIcon /> <span>Solve</span>{" "}
                    </button>
                    <button className="second">
                      <AssignmentIcon /> <span>More!</span>
                    </button>
                  </div>
                </div>
                <div className="bottom">
                  <span> Solved Problems </span>
                  <div className="progress">
                    <Progressbar
                      solved={solved}
                      totalQues={data.totalQues}
                    />
                  </div>
                  <div className="typewiseprogress">
                    <div className="easy">
                      <h4>Easy</h4>
                      <ProgressBar
                        completed={`${easy}`}
                        maxCompleted={`${data.easy}`}
                        isLabelVisible={false}
                        bgColor="rgb(0, 184, 163)"
                        width="150px"
                        height="7px"
                      />
                    </div>
                    <div className="medium">
                      <h4>Medium</h4>
                      <ProgressBar
                        completed={`${medium}`}
                        bgColor="rgb(255, 192, 30)"
                        maxCompleted={`${data.medium}`}
                        isLabelVisible={false}
                        height="7px"
                        width="150px"
                      />
                    </div>
                    <div className="hard">
                      <h4>Hard</h4>
                      <ProgressBar
                        completed={`${hard}`}
                        maxCompleted={`${data.hard}`}
                        isLabelVisible={false}
                        bgColor="rgb(239, 71, 67)"
                        height="7px"
                        width="150px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentWrapper>
        </div>
        <ContentWrapper>
          <div className="headings">
            <h6 className="status">Status</h6>
            <h6 className="question">Problem Title</h6>
            <h6 className="art">Difficulty</h6>
            <h6 className="lc">Leetcode</h6>
            <h6 className="gfg">GFG</h6>
          </div>
          <div className="line" />

          {data.problem.map((val, index) => (
            <SingleQuestion
              data={val}
              key={index}
              background={getBackground(val.problemId)}
              setEasy={setEasy}
              setMedium={setMedium}
              setHard={setHard}
              setSolved={setSolved}
            />
          ))}
        </ContentWrapper>
      </>
    );
  };

  return (
    <div className="Questions">
      {sheetData.map((data) => {
        if (data.topicId == id) {
          return renderQuestions(data);
        }
      })}
    </div>
  );
};

export default Questions;
