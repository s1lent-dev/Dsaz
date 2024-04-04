import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Progressbar from '../Progressbar/Progressbar'
import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsTopicId } from '../../context/sheetSlice';
const Topics = ({data, islogin}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
      if(islogin){
        navigate(`/Dsaz/${data.topic.topicId}`)
        dispatch(setIsTopicId(data.topic.topicId))
        localStorage.setItem('topicId', JSON.stringify(data.topic.topicId))
      } else {
        alert('Please login to solve the questions')
      }
    }

  return (
    <div className='Topics'>
        <div className="wrapper">
            <div className="left">
                <h1>{data.topic.topic}</h1>
                <span>Easy: {data.topic.totalEasy} - Medium: {data.topic.totalMedium} - Hard: {data.topic.totalHard}</span>
                <button className="play" onClick={handleClick}> <QuestionAnswerIcon /> <span>Solve</span> </button>
            </div>
            <div className="right">
                <Progressbar solved={data.topic.solved} totalQues={data.topic.totalQues} />
            </div>
        </div>
    </div>
  )
}



export default Topics
