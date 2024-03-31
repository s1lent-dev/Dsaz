import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Progressbar from './Progressbar/Progressbar'
import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Topics = ({data, islogin}) => {

    const navigate = useNavigate();
    const handleClick = () => {
      if(islogin){
        navigate(`/Dsaz/${data.topicId}`)
      }else{
        navigate(`/Dsaz/`)
        alert("Please Login to solve the questions")
      }
    }

  return (
    <div className='Topics'>
        <div className="wrapper">
            <div className="left">
                <h1>{data.topic}</h1>
                <span>Easy: {data.easy} - Medium: {data.medium} - Hard: {data.hard}</span>
                <button className="play" onClick={handleClick}> <QuestionAnswerIcon /> <span>Solve</span> </button>
            </div>
            <div className="right">
                <Progressbar solved={data.solved} totalQues={data.totalQues} />
            </div>
        </div>
    </div>
  )
}

Topics.propTypes = {
    data: PropTypes.shape({
      topicId: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      solved: PropTypes.number.isRequired,
      totalQues: PropTypes.number.isRequired,
      easy: PropTypes.number.isRequired,
      medium: PropTypes.number.isRequired,
      hard: PropTypes.number.isRequired,
    })
  }

export default Topics
