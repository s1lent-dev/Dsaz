import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Progressbar from '../Progressbar/Progressbar'
import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsTopicId } from '../../context/sheetSlice';
const Topics = ({data, isLogin}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
      if(isLogin){
        dispatch(setIsTopicId(data.topicId))
        localStorage.setItem('topicId', JSON.stringify(data.topicId))
        navigate(`/${data.topicId}`)
      } else {
        alert('Please login to solve the questions')
      }
    }
    
  return (
    <div className='Topics'>
        <div className="wrapper">
            <div className="left">
                <h1>{data.topic}</h1>
                <span>Easy: {data.totalEasy} - Medium: {data.totalMedium} - Hard: {data.totalHard}</span>
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
    topicId: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    totalEasy: PropTypes.number.isRequired,
    totalMedium: PropTypes.number.isRequired,
    totalHard: PropTypes.number.isRequired,
    solved: PropTypes.number.isRequired,
    totalQues: PropTypes.number.isRequired,
  }).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default Topics
