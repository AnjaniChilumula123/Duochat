import React from 'react'
import Sidebar from './Sidebar'
import Chatarea from './Chatarea'
import "./myStyles.css"

function MainContainer() {
  return (
    <div className="main-container">
        <Sidebar/>
        <Chatarea/>
    </div>
  )
}

export default MainContainer