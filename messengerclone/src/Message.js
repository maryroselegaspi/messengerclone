import React from 'react';
// import './Message.css'

function Message({username, text}) {
    return (
        <div className ='message'>
            {/* <h4>{username}</h4> */}
            
            <h2>{username} : {text}</h2>
            
        </div>
    )
}

export default Message 

