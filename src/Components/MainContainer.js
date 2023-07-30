import React from 'react'
import Sidebar from './Sidebar'
import Chatarea from './Chatarea'
import CreateGroups from './CreateGroups'
import  { useState } from 'react';


import "./myStyles.css"
import Welcome from './Welcome';

function MainContainer() {
  const [conversations,setConversations]=useState([
    {
     name:"Test1",
     lastMessage:"last message #1",
     timestamp:"today"
    },
    {
     name:"Test2",
     lastMessage:"last message #2",
     timestamp:"today"
    },
    {
     name:"Test3",
     lastMessage:"last message #3",
     timestamp:"today"
    },
    {
     name:"Test4",
     lastMessage:"last message #4",
     timestamp:"today"
    }
 ]);
  return (
    <div className="main-container">
        <Sidebar/>
        {/* <CreateGroups/> */}
    
         <Welcome/>
        {/* <Chatarea props={conversations[0]}/> */}
    </div>
  )
}

export default MainContainer