import React from 'react'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Progressbar from './Progressbar/Progressbar'
import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom';
const Topics = ({data, islogin}) => {

    const navigate = useNavigate();
    const handleClick = () => {
      if(islogin){
        navigate(`/Dsaz/${data.id}`)
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
                <span>Easy: {data.Easy} - Medium: {data.Medium} - Hard: {data.Hard}</span>
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
      id: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      solved: PropTypes.number.isRequired,
      totalQues: PropTypes.number.isRequired,
      Easy: PropTypes.number.isRequired,
      Medium: PropTypes.number.isRequired,
      Hard: PropTypes.number.isRequired,
    })
  }

export default Topics
