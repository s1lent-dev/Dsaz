import React, { useEffect } from 'react'
import './styles.scss'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { useSelector } from 'react-redux'
import { useFetchAllTopics } from '../../context/ApiCalls'

const Loading = () => {
  const topicsData = useSelector((state) => state.Topics.topicsData);
  const { fetchData } = useFetchAllTopics();
  useEffect(() => {
    fetchData('https://dsaz-server.vercel.app/api/sheets/getSheets');
  }, []);

  return (
    <div className='loading'>
      <ContentWrapper>
        <div className='container'>
          <h6>Please Login / Register to solve the sheet !</h6>
          <div className="topics">
            {topicsData.map((topic) => (
              <div className="topic" key={topic._id}>
                <span>{topic.topic}</span> 
                <p>{topic.totalQues} Problems</p>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Loading
