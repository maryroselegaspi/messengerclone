import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const[messages, setMessages]= useState([
    {username:'Mary', text:'hey'}, 
    {username:'sonny', text:'yoo'}
  ]);
  const[username,setUserName] = useState('');

  useEffect(() => {
    //run code here
    //if blank, run code once component loads (no condition, only when page loads)

    // const username = prompt('please enter your name')
    setUserName(prompt('please enter you name:'));
  }, []) //condition

  const SendMessage =(event) =>{
    // all the logic to send the message

    event.preventDefault(); //to prevent refresh everytime enter is hit  
    setMessages([
      ...messages, {username:username, text:input}
    ]) // spread operator => keep all the messages but append the latest to the end
    
      setInput(''); //to clear the input
  }
  console.log(input)
  console.log(messages);

  return (
    <div className="App">
      <h1>this is React</h1>
      {/* Input */}
      {/* button */}
      {/* messages */}

      <h2>Welcome {username}</h2>
      {/* To enable enter key to function instead of clicking the button-- wrap in a form */}
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input   value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input}variant='contained' color='primary' type='submit' onClick={SendMessage}>SendMessage</Button>
        </FormControl>
      </form>
      {
       messages.map(message => (
        //  <p>{message}</p>
        <Message username={message.username} text={message.text} />
       ))
      }
    
    </div>
  );
}

export default App;
