import React from 'react'

function ConversationItems({props}) {
  return (
    <div className='conversation-container'>
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-lastMesssage'>{props.lastMessage}</p>
        <p className='con-timestamp'>{props.timestamp}</p>
    </div>
  )
}

export default ConversationItems