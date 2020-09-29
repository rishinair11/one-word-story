import React, {useState} from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

const socket = socketIOClient(ENDPOINT);

function App() {
  const [word, setWord] = useState('')
  const [story, setStory] = useState('')

  const handleInput = (e) => {
    let value = e.target.value;
    if (value.trim() !== "" || value !== null || value !== undefined) {
      setWord(value)
    }
  }

  const submitWord = () => {
    socket.emit('add_word', word)
    socket.on('story', response => {
      setStory(response)
      console.log(story)
    })
  }

  const resetStory = () => {
    socket.emit('reset_story', "")
    socket.on('story', response => {
      setStory(response)
      console.log(story)
    })
  }

  return (
    <div>
      <p>{socket.id}</p>
      <h1>{story}</h1>
      <input type="text" name="word" onChange={handleInput}></input>
      <button onClick={submitWord}>Submit</button>
      <button onClick={resetStory}>Reset</button>
    </div>
      
  );
}

export default App;