import React from 'react'

function MessageSelf() {
    var props2 ={ message:'this is a Sample message ' , timestamp:'9:00'};
  return (
    <div className='self-message-container'>
       
       <div className='messageBox'>
       <p className='con-lastMesssage'>{props2.message}</p>
        <p className='con-timestamp'>{props2.timestamp}</p>
       </div>
              
    </div>
  )
}

export default MessageSelf