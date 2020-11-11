import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
// import './Message.css'

function Message({username, text}) {
    return (
        // <div className ='message'>
        //     {/* <h4>{username}</h4> */}
            
        //     <h2>{username} : {text}</h2>
            
        // </div>
        <Card >
            <CardContent>
                <Typography
                 color='white'
                 variant='h5'
                 component='h2'
                 >
                    {username}:  {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Message 

