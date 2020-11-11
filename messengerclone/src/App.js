import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const[messages, setMessages]= useState([
    // {username:'Mary', message:'hey'}, 
    // {username:'sonny', message:'yoo'}
  ]);
  const[username,setUserName] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
    })
    
  }, []);

  console.log(messages)
  useEffect(() => {
    //run code here
    //if blank, run code once component loads (no condition, only when page loads)

    // const username = prompt('please enter your name')
    setUserName(prompt('please enter you name:'));
  }, []) //condition

  const SendMessage =(event) =>{
    // all the logic to send the message

    event.preventDefault(); //to prevent refresh everytime enter is hit  

    // to ensure that messages are sorted by time
    db.collection('messages').add({
      message: input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()    
    })
    setMessages([
      ...messages, {username:username, message:input}
    ]) // spread operator => keep all the messages but append the latest to the end
    
      setInput(''); //to clear the input
  }
  console.log(input)
  console.log(messages);

  return (
    <div className="App">
      <img src='https://i.pinimg.com/originals/3f/15/06/3f1506cc4c75f0fd5ac6aead47bb2417.png' />
      <h1>this is React</h1>
      {/* Input */}
      {/* button */}
      {/* messages */}

      <h2>Welcome {username}</h2>
      {/* To enable enter key to function instead of clicking the button-- wrap in a form */}
      <form className='app__form'>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input   value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton disabled={!input} type='submit' color='primary' onClick={SendMessage} variant='outlined' className='app__button' >
            <SendIcon/>
          </IconButton>
          {/* <Button disabled={!input}variant='contained' color='primary' type='submit' onClick={SendMessage}>SendMessage</Button> */}
        </FormControl>
      </form>
     <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message ={message} />
        ))
        }
     </FlipMove>
    
    </div>
  );
}

export default App;
