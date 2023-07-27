import React from 'react'
import "./myStyles.css"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material'

function Chatarea({props}) {
  
  return (
    <div className='chatarea-container'>   
      <div className='chatarea-header'>
        <p className='con-icon'>T</p>
        <div className='header-text'>
           <p className='con-title'>Test#1</p>
           <p className='con-timestamp'>today</p>
        </div>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className='message-container'>message container</div>
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