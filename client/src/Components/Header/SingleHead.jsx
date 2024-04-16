import React from 'react'
import './styles.scss'
import PropTypes from "prop-types";
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AssignmentIcon from '@mui/icons-material/Assignment';
const SingleHead = ({data}) => {
  return (
    <div className="SingleHead">
      <div className="Backdrop-img">
        <img src={data.URL} />
      </div>
      <div className="leftfade"></div>
      <div className="overlay"></div>
      <ContentWrapper>
        <div className="content">
          <div className="Info">
            <h4>{data.title}</h4>
            <p>{data.desc}</p>
          </div>
          <div className="Buttons">
            <button className="play">
              <QuestionAnswerIcon /> <span>Solve</span>
            </button>
            <button className="more">
              <AssignmentIcon />
              <span>Articles</span> 
              </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

SingleHead.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      URL: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  };

export default SingleHead
