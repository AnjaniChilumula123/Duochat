import React, { useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import SearchIcon from '@mui/icons-material/Search';import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./myStyles.css";
import {IconButton} from "@mui/material";
import ConversationItems from './ConversationItems';

function Sidebar() {
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
    <div className='sidebar-container'>
        <div className='sd-header'>
            <div>
            <IconButton>
                <AccountCircleIcon/>
            </IconButton>
            </div>
       
            <div>
            <IconButton>
                <PersonAddAlt1Icon/>
            </IconButton>
            <IconButton>
                <Diversity3Icon/>
            </IconButton>
            <IconButton>
                <AddCircleOutlineIcon/>
            </IconButton>
            <IconButton>
                <Brightness4Icon/>
            </IconButton>

            </div>

        </div>
        <div className='sd-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input placeholder='search' className='searchbox'></input>
            </div>

        <div className='sd-conversations'>
            {conversations.map((conversation)=>{
                return <ConversationItems props={conversation}/>
            })}
        </div>

    
    </div>
  )
}

export default Sidebar