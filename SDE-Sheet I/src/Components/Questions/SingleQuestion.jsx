import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import lc from "../../assets/leetcode.svg";
import gfg from "../../assets/gfg.png";
import { useSelector } from "react-redux";
import { useUpdate } from "../../context/ApiCalls";

const SingleQuestion = ({ topicId, problem, index, background }) => {
  
  const data = useSelector((state) => state.singleSheet.sheetData);
  const { updateStatus, loading, error } = useUpdate();
  const userData = useSelector((state) => state.user.userData);
  const isLogin = useSelector((state) => state.user.isLogin);
  const AuthToken = userData.accessToken;
  const [selectedStatus, setSelectedStatus] = useState(problem.status); 

  useEffect(() => {
    setSelectedStatus(problem.status);
  }, [problem.status]);

  const handleStatusChange = async (problemId, newStatus, difficulty) => {
    const body = { status: newStatus, difficulty: difficulty };
    if (isLogin && AuthToken) {
      await updateStatus(
        `http://localhost:3000/api/sheets/update/${topicId}/${problemId}`,
        AuthToken,
        body
      );
      setSelectedStatus(newStatus);
    }
  };

  return (
    <div className={`SingleQuestion ${background}`}>
      <div className="status">
        <div className={`dot ${selectedStatus}`} />
        <select
          name="currentStatus"
          value={selectedStatus}
          onChange={(e) =>
            handleStatusChange(problem.problemId, e.target.value, problem.difficulty)
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
        <a href={problem.leetcode}>
          <img src={lc} alt="" />
        </a>
      </div>
      <div className="gfg">
        <a href={problem.gfg}>
          <img src={gfg} alt="" />
        </a>
      </div>
    </div>
  );
};

SingleQuestion.propTypes = {
  topicId: PropTypes.string.isRequired,
  problem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
};

export default SingleQuestion;
