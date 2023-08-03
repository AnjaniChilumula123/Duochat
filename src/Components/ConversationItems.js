import React from 'react'
import { useNavigate } from 'react-router-dom'

function ConversationItems({props}) {
  const navigate =useNavigate();
  return (
    <div className='conversation-container' onClick={()=>navigate('chat')}>
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-lastMesssage'>{props.lastMessage}</p>
        <p className='con-timestamp'>{props.timestamp}</p>
    </div>
  )
}

export default ConversationItems