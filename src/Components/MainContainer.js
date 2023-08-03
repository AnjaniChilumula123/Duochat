import React from 'react'
import Sidebar from './Sidebar'
import Chatarea from './Chatarea'
import CreateGroups from './CreateGroups'
import  { useState } from 'react';
import Login from './Login'
import "./myStyles.css"
import Welcome from './Welcome';
import AvailableUsers from './AvailableUsers';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector}  from 'react-redux'

function MainContainer() {
  const lightTheme = useSelector((state) => state.themeKey);
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
    <div className={"main-container"  +(lightTheme? "" :" grey")}>
        <Sidebar/>
        {/* <Welcome/> */}
        {/* <CreateGroups/> */}
          <Outlet/>
         {/* <Login/> */}
        {/* <Chatarea props={conversations[0]}/> */}
    </div>
  )
}

export default MainContainer