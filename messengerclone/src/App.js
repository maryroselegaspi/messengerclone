import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const[messages, setMessages]= useState(['Hi', 'Ther']);

  const SendMessage =(event) =>{
    // all the logic to send the message

    event.preventDefault(); //to prevent refresh everytime enter is hit
    // spread operator => keep all the messages but append the latest to the end
    setMessages([...messages, input])
    setInput(''); //to clear the input
  }
  console.log(input)
  console.log((messages))
  return (
    <div className="App">
      <h1>this is React</h1>
      {/* Input */}
      {/* button */}
      {/* messages */}
      {/* To enable enter key to function instead of clicking the button-- wrap in a form */}
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}>
        </input>
        <button type='submit' onClick={SendMessage}>SendMessage</button>
      </form>
      {/* Messages themselves */}
      {
       messages.map(message => (
         <p>{message}</p>
       )) 
      }
    
    </div>
  );
}

export default App;
