import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import lc from "../../assets/leetcode.svg";
import gfg from "../../assets/gfg.png";
import note from "../../assets/Articles.webp";
import { useSelector } from "react-redux";
import { useUpdate } from "../../context/ApiCalls";
import { useFetchSingleSheet } from "../../context/ApiCalls";


const SingleQuestion = ({topicId, problem, index, background, setIsNotesOpen, setProblem}) => {
  
  const { updateStatus } = useUpdate();
  const userData = useSelector((state) => state.user.userData);
  const isLogin = useSelector((state) => state.user.isLogin);
  const AuthToken = userData.accessToken;
  const [selectedStatus, setSelectedStatus] = useState(problem.status);
  const { fetchData, loading, error } = useFetchSingleSheet();
  
  useEffect(() => {
    setSelectedStatus(problem.status);
  }, [problem.status]);

  const handleStatusChange = async (problemId, newStatus, difficulty) => {
    const body = { status: newStatus, difficulty: difficulty };
    if (isLogin) {
      await updateStatus(
        `https://dsaz-server.vercel.app/api/sheets/update/${topicId}/${problemId}`,
        AuthToken,
        body,
        userData.email
      );
      await fetchData(
        `https://dsaz-server.vercel.app/api/sheets/get/${topicId}`,
        AuthToken,
        userData.email
      );
      setSelectedStatus(newStatus);
    }
  };

  const handleNotes = () => {
    setIsNotesOpen(true);
    setProblem(problem);
  };

  return (
    <div className={`SingleQuestion ${background}`}>
      <div className="status">
        <div className={`dot ${selectedStatus}`} />
        <select
          name="currentStatus"
          value={selectedStatus}
          onChange={(e) =>
            handleStatusChange(
              problem.problemId,
              e.target.value,
              problem.difficulty
            )
          }
        >
          <option value="pending">Pending</option>
          <option value="revisit">Revisit</option>
          <option value="solved">Solved</option>
        </select>
      </div>
      <div className="question">
        <h4>
          <a href={problem.article}>
            {problem.problemId}. {problem.title}
          </a>
        </h4>
      </div>
      <div className="difficulty">
        <div className={`type ${problem.difficulty}`}>{problem.difficulty}</div>
      </div>
      <div className="leetcode">
        {problem.leetcode !== "" && (
          <a href={problem.leetcode}>
            <img src={lc} alt="" />
          </a>
        )}
      </div>
      <div className="gfg">
        {problem.gfg !== "" && (
          <a href={problem.gfg}>
            <img src={gfg} alt="" />
          </a>
        )}
      </div>
      <div className="notes">
        <img src={note} alt="" onClick={handleNotes} />
      </div>
    </div>
  );
};

SingleQuestion.propTypes = {
  topicId: PropTypes.string.isRequired,
  problem: PropTypes.shape({
    problemId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    leetcode: PropTypes.string,
    gfg: PropTypes.string,
    status: PropTypes.oneOf(["pending", "revisit", "solved"]).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
  setIsNotesOpen: PropTypes.func.isRequired,
  setProblem: PropTypes.func.isRequired,
};

export default SingleQuestion;
