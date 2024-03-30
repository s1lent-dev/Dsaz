import React from 'react'
import './styles.scss'
import Topics from './Topics'
import { SheetData } from "../DsaSheet"
import ContentWrapper from '../ContentWrapper/ContentWrapper'
const Sheet = ({islogin}) => {

  const chunkedData = [];
  for (let i = 0; i < SheetData.length; i += 3) {
    chunkedData.push(SheetData.slice(i, i + 3));
  }
  return (
    <div className='Sheet'>
      <ContentWrapper>
        <div className="container">
        {chunkedData.map((chunk, index) => (
            <div className="row" key={index}>
              {chunk.map((data) => (
                <div className="column" key={data.id}>
                  <Topics data={data} islogin={islogin} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Sheet
