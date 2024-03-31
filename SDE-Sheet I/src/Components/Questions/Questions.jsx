import React from "react";
import "./styles.scss";
import Progressbar from "../Sheet/Progressbar/Progressbar";
import Backg from "../../assets/Backdrop.jpg";
import arr from "../../assets/array.jpg";
import SingleQuestion from "./SingleQuestion";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SheetData } from "../DsaSheet";
const Questions = () => {
  
  const [background, setBackground] = useState("black");
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  const [solved, setSolved] = useState(0);

  const[problems, setProblems] = useState([]);
  const[sheetData, setSheetData] = useState([]);
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/sheets/getAll');
        setSheetData(res.data);
        setProblems(res.data.problem);
        console.log(res);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProblems();
  }, []);


  let { id } = useParams();

  const getBackground = (id) => {
    return id % 2 === 0 ? "grey" : "black";
  };

  return (
    <div className="Questions">
      {sheetData.map((data) => {
        if (data.topicId == id) {
          return (
            <>
              <div className="container">
                <div className="backdrop">
                  <img src={Backg} alt="" />
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

                {data.problem.map((val) => (
                  <SingleQuestion
                    data={val}
                    key={val.id}
                    background={getBackground(val.problemId)}
                    setBackground={setBackground}
                    setEasy={setEasy}
                    easy={easy}
                    setMedium={setMedium}
                    setHard={setHard}
                    setSolved={setSolved}
                  />
                ))}
              </ContentWrapper>
            </>
          );
        }
      })}
    </div>
  );
};

export default Questions;
