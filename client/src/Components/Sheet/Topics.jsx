import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Progressbar from '../Progressbar/Progressbar'
import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTopicId } from '../../context/sheetSlice';
const Topics = ({data, islogin}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
      if(islogin){
        navigate(`/${data.topicId}`)
        dispatch(setIsTopicId(data.topicId))
        localStorage.setItem('topicId', JSON.stringify(data.topicId))
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



export default Topics
