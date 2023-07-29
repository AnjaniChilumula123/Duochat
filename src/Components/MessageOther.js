import React from 'react'
import './myStyles.css'

function MessageOther() {
    var props1 ={ name :'RandomUser', message:'This is a Sample message' , timestamp:'today'};

  return (
        <div className='other-message-container'>
            <div className='conversation-container'>
               <p className='con-icon'>{props1.name[0]}</p>
               <div className='other-text-content'>
                    <p className='con-title'>{props1.name}</p>
                    <p className='con-lastMesssage'>{props1.message}</p>
                    <p className='con-timestamp'>{props1.timestamp}</p>   
               </div>    
            </div>
        </div>
  )
}

export default MessageOther