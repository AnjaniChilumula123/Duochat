import React, { useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./myStyles.css";
import {IconButton} from "@mui/material";
import ConversationItems from './ConversationItems';
import { useNavigate } from 'react-router-dom';
import AvailableUsers from './AvailableUsers';
import AvailableGroups from './AvailableGroups';
import { useDispatch, useSelector}  from 'react-redux'
import {store} from "../Features/store"
import CreateGroups from './CreateGroups';
import { toggleTheme } from '../Features/themeSlice';

function Sidebar() {
    // console.log(useSelector((state) => state.themeKey))
    const lightTheme = useSelector((state) => state.themeKey);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        <div className={"sd-header "  +(lightTheme? "" :"dark")}>
            <div>
            <IconButton >
                <AccountCircleIcon className={"icon "  +(lightTheme? "" :"dark")} />
            </IconButton>
            </div>
       
            <div>
            <IconButton onClick={()=>{navigate("av-users")}}>
                <PersonAddAlt1Icon  className={"icon "  +(lightTheme? "" :"dark")}/>
            </IconButton>
            <IconButton onClick={()=>{navigate("av-groups")}}>
                <Diversity3Icon className={"icon "  +(lightTheme? "" :"dark")}/>
            </IconButton>
            <IconButton onClick={()=>{navigate("create-groups")}}>
                <AddCircleOutlineIcon className={"icon "  +(lightTheme? "" :"dark")}/>
            </IconButton>
            <IconButton onClick={()=>{dispatch(toggleTheme())}}>
                {lightTheme&&(<NightlightRoundIcon className={ "icon " +(lightTheme? "" :"dark")}/>)}
                {!lightTheme&&(<Brightness7Icon className={ "icon " +(lightTheme? "" :"dark")}/>)}
            </IconButton>

            </div>

        </div>
        <div className={"sd-search"  +(lightTheme? "" :" dark")}>
            <IconButton>
                <SearchIcon className={"icon "  +(lightTheme? "" :"dark")}/>
            </IconButton>
            <input placeholder='search' className={"searchbox"  +(lightTheme? "" :" dark")}></input>
            </div>

        <div className={"sd-conversations"  +(lightTheme? "" :" dark")}>
            {conversations.map((conversation)=>{
                return <ConversationItems props={conversation}/>
            })}
        </div>

    
    </div>
  )
}

export default Sidebar