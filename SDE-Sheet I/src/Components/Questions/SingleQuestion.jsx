import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from "prop-types";
import lc from "../../assets/leetcode.svg";
import gfg from "../../assets/gfg.png";
import art from "../../assets/Articles.webp";

const SingleQuestion = ({data, background, setEasy, setMedium, setHard, setSolved}) => {
  const [status, setStatus] = useState(data.status);
  const[color , setColor] = useState(`${data.status}`);

  const handleChange = (e) => {
    const newStatus = e.target.value;
    if(status === "pending" && newStatus === "revisit"){
      alert("Solve the question first");
      return;
    }
    setStatus(newStatus);
    setColor(newStatus.toLowerCase());

    if(newStatus === "solved"){
      if(data.type === "Easy") setEasy((prev) => prev + 1);
      if(data.type === "Medium") setMedium((prev) => prev + 1);
      if(data.type === "Hard") setHard((prev) => prev + 1);
      setSolved((prev) => prev + 1);
    }else if(newStatus === "pending"){
      if(data.type === "Easy") setEasy((prev) => prev - 1);
      if(data.type === "Medium") setMedium((prev) => prev - 1);
      if(data.type === "Hard") setHard((prev) => prev - 1);
      setSolved((prev) => prev - 1);
    }
  };

  return (
    <div className={`SingleQuestion ${background}`}>
      <div className="status">
        <div className={`dot ${color}`} />
        <select name="currentStatus" value={status} onChange={handleChange}>
          <option value="pending" >Pending</option>
          <option value="revisit" >Revisit</option>
          <option value="solved" >Solved</option>
        </select>
      </div>
      <div className="question">
        <h4> <a href={data.article}> {data.question} </a> </h4>
      </div>
      <div className="difficulty">
        <div className={`type ${data.type}`}>{data.type}</div>
      </div>
      <div className="leetcode">
        <a href={data.leetcode}>
          <img src={lc} alt="" />
        </a>
      </div>
      <div className="gfg">
        <a href={data.gfg}>
          <img src={gfg} alt="" />
        </a>
      </div>
    </div>
  );
};

SingleQuestion.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    isSolved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    leetcode: PropTypes.string.isRequired,
    gfg: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleQuestion;
