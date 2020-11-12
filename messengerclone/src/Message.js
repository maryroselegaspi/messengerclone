import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import React,{forwardRef, useState} from 'react';
import './Message.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import firebase from 'firebase';

const Message = forwardRef(({id, username, message}, ref) => {
    const isUser = username === message.username;

    const deleteMessage =() =>{
        firebase.firestore().collection('messages')
        .doc(id)
        .delete()
        
      }
    //   console.log('Message doc id:' , id);
    // console.log(message.timestamp.toDate())

    return (
        <div ref ={ref} className={`message ${isUser && 'message__user'}`} >
           
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent  >
                    {!isUser && 
                    <Typography className='message__guestCardName' color='white' variant='body2' component='p' > 
                        {`${message.username || 'Unknown User'}`}
                    </Typography>
                    }

                    <Typography  color='white' variant='h5' component='h2' >
                        {message.message}
                    </Typography>        
                </CardContent>             
            </Card>
            {isUser && 
                <IconButton color='gray' onClick={deleteMessage} variant='outlined'  > 
                    <DeleteForeverIcon fontSize='small'  />
                </IconButton>
            }
            
        </div>
        
    )
})

export default Message 

