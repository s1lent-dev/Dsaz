import React, { useEffect, useState } from "react";
import "./styles.scss";
import Progressbar from "../Progressbar/Progressbar";
import BackdropImage from "../../assets/Backdrop.jpg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ProgressBar from "@ramonak/react-progress-bar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Assuming the correct action is imported
import SingleQuestion from "./SingleQuestion";
import { useFetchSingleSheet } from "../../context/ApiCalls"; // Assuming the correct context is imported
import { setIsHomepage } from "../../context/TopicSlice";
import Notes from "./Notes";
const Questions = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState({});
  const Topic = useSelector((state) => state.Topics.topic);
  const singleSheetData = useSelector((state) => state.singleSheet.sheetData);
  const sheetData = useSelector((state) => state.sheet.sheetData);
  const userData = useSelector((state) => state.user.userData);
  const isLogin = useSelector((state) => state.user.isLogin);
  const loading = useSelector((state) => state.singleSheet.isLoading);
  const error = useSelector((state) => state.singleSheet.isError);
  const[isNotesOpen, setIsNotesOpen] = useState(false);
  const[problem, setProblem] = useState("");
  const AuthToken = userData.accessToken;
  const { fetchData } = useFetchSingleSheet();

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData(
        `http://localhost:3000/api/sheets/get/${id}`,
        AuthToken,
        userData.email
      );
    };
    fetchDataAsync();
    dispatch(setIsHomepage(false));

    return () => {
      dispatch(setIsHomepage(true));
    };
  }, []);

  useEffect(() => {
    if (Topic) {
      const filtered = singleSheetData.problems.filter((problem) =>
        problem.title.toLowerCase().includes(Topic.toLowerCase())
      );
      setFilteredData({ ...singleSheetData, problems: filtered });
    } else {
      setFilteredData(singleSheetData);
    }
  }, [Topic, singleSheetData]);

  const background = (index) => {
    return index % 2 === 0 ? "black" : "grey";
  };

  return (
    <div className="Questions">
      <div className="container">
        <div className="backdrop">
          <img src={BackdropImage} alt="" />
        </div>
        <div className="opacity-layer" />
        <ContentWrapper>
          <div className="content">
            <div className="left">
              <img src={singleSheetData.img} alt="" />
            </div>
            <div className="right">
              <div className="top">
                <h1>{singleSheetData.topic}</h1>
                <ul>
                  <li>Easy: {singleSheetData.totalEasy}</li>
                  <li>Medium: {singleSheetData.totalMedium}</li>
                  <li>Hard: {singleSheetData.totalHard}</li>
                </ul>
                <p className="overview">{singleSheetData.overview}</p>
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
                <span className="solved"> Solved Problems </span>
                <div className="progress">
                  <Progressbar
                    solved={singleSheetData.solved}
                    totalQues={singleSheetData.totalQues}
                  />
                </div>
                <div className="typewiseprogress">
                  <div className="easy">
                    <div className="lable">
                      <h4>Easy</h4>
                      <span>{`${singleSheetData.solvedEasy} / ${singleSheetData.totalEasy} `}</span>
                    </div>
                    <ProgressBar
                      completed={`${singleSheetData.solvedEasy}`}
                      maxCompleted={`${singleSheetData.totalEasy}`}
                      isLabelVisible={false}
                      bgColor="rgb(0, 184, 163)"
                      width="150px"
                      height="7px"
                    />
                  </div>
                  <div className="medium">
                    <div className="lable">
                      <h4>Medium</h4>
                      <span>{`${singleSheetData.solvedMedium} / ${singleSheetData.totalMedium} `}</span>
                    </div>
                    <ProgressBar
                      completed={`${singleSheetData.solvedMedium}`}
                      bgColor="rgb(255, 192, 30)"
                      maxCompleted={`${singleSheetData.totalMedium}`}
                      isLabelVisible={false}
                      height="7px"
                      width="150px"
                    />
                  </div>
                  <div className="hard">
                    <div className="lable">
                      <h4>Hard</h4> {/* Corrected label */}
                      <span>{`${singleSheetData.solvedHard} / ${singleSheetData.totalHard} `}</span>
                    </div>
                    <ProgressBar
                      completed={`${singleSheetData.solvedHard}`}
                      maxCompleted={`${singleSheetData.totalHard}`}
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
        {isNotesOpen && <Notes setIsNotesOpen={setIsNotesOpen} problem={problem} topicId={id}/>}
        <div className="headings">
          <h6 className="status">Status</h6>
          <h6 className="question">Problem Title</h6>
          <h6 className="art">Difficulty</h6>
          <h6 className="lc">Leetcode</h6>
          <h6 className="gfg">GFG</h6>
          <h6 className="notes">Notes</h6>
        </div>
        <div className="line" />
        {filteredData &&
          filteredData.problems &&
          filteredData.problems.map((problem, index) => (
            <SingleQuestion
              key={problem.problemId}
              problem={problem}
              index={index}
              topicId={id}
              background={background(index)}
              setIsNotesOpen={setIsNotesOpen}
              setProblem={setProblem}
            />
          ))}
      </ContentWrapper>
    </div>
  );
};

export default Questions;
