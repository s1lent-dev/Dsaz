import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Progressbar from '../Progressbar/Progressbar'
import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Topics = ({data, islogin}) => {

    const navigate = useNavigate();
    const handleClick = () => {
      if(islogin){
        navigate(`/Dsaz/${data.topicId}`)
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
      topicId: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      solved: PropTypes.number.isRequired,
      totalQues: PropTypes.number.isRequired,
      totalEasy: PropTypes.number.isRequired,
      totalMedium: PropTypes.number.isRequired,
      totalHard: PropTypes.number.isRequired,
    })
  }

export default Topics
