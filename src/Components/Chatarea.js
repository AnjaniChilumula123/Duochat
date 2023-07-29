import React from 'react'
import "./myStyles.css"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'
import MessageSelf from './MessageSelf';
import MessageOther from './MessageOther';

function Chatarea({props}) {
  
  return (
    <div className='chatarea-container'>   
      <div className='chatarea-header'>
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
    <div className='text-input-area'>
      <input placeholder='type here....' className='text-input'></input>
      <IconButton>
         <SendIcon/>
      </IconButton>
      </div>
    </div>
  )
}

export default Chatarea