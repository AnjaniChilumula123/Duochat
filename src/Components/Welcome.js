import React from 'react'
import "./myStyles.css"
import Lottie from 'lottie-react'
import Welcomelogo from '../Welcomelogo.json'

function Welcome() {
  return (
    <div className='welcome-container'>
       <Lottie  className='welcome-logo' loop={true} animationData={Welcomelogo}/>
      <p>Come on Start the conversation with your friends and family</p>
    </div>
  )
}

export default Welcome