import React from 'react'
import "./myStyles.css"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import MessageSelf from './MessageSelf';
import MessageOther from './MessageOther';
import {useState} from 'react'
import { useDispatch, useSelector}  from 'react-redux'

function Chatarea() {
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
  var props = conversations[0];
  
  return (
    <div className='chatarea-container'>   
      <div className={'chatarea-header'+(lightTheme? "":" dark")}>
        <p className='con-icon'>{props.name[0]}</p>
        <div className='header-text'>
           <p className='con-title'>{props.name}</p>
           <p className='chatarea-timestamp'>{props.timestamp}</p>
        </div>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className='message-container'>
          <MessageOther/>
          <MessageSelf/>
          <MessageOther/>
          <MessageSelf/>
          <MessageOther/>
          <MessageSelf/>
          <MessageOther/>
          <MessageSelf/>
        </div>
    <div className={'text-input-area'+(lightTheme? "":" dark")}>
      <input placeholder='type here....' className={'text-input'+(lightTheme? "":" dark")}></input>
      <IconButton>
         <SendIcon/>
      </IconButton>
      </div>
    </div>
  )
}

export default Chatarea