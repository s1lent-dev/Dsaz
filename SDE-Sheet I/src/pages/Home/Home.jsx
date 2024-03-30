import React from 'react'
import Header from '../../Components/Header/Header'
import Sheet from '../../Components/Sheet/Sheet'
const Home = ({islogin}) => {

  return (
    <div className='Home'>
      <Header />
      <Sheet islogin={islogin}/> 
    </div>
  )
}

export default Home
