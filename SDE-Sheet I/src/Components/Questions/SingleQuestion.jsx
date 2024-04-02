import React, { useState } from 'react';
import PropTypes from "prop-types";
import lc from "../../assets/leetcode.svg";
import gfg from "../../assets/gfg.png";
import { useSelector } from 'react-redux';

const SingleQuestion = () => {
  const data = useSelector((state) => state.singleSheet);

  // Check if data.problem is defined and is an array before mapping over it
  if (!data.problem || !Array.isArray(data.problem)) {
    return null; // Or you can render a loading indicator or error message
  }

  return (
    <>
      {data.problem.map((problem, index) => {
        // Set the background color based on the problemId
        const background = index % 2 === 0 ? 'black' : 'grey';
        return (
          <div className={`SingleQuestion ${background}`} key={index}>
            <div className="status">
              <div className='dot' />
              <select name="currentStatus">
                <option value="pending">Pending</option>
                <option value="revisit">Revisit</option>
                <option value="solved">Solved</option>
              </select>
            </div>
            <div className="question">
              <h4><a href={problem.article}>{problem.problemId}. {problem.title}</a></h4>
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
      })}
    </>
  );
};

export default SingleQuestion;
