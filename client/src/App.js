import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";
let socket;

function App() {
  const [word, setWord] = useState('')
  const [story, setStory] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
    socket.on('story', response => {
      setStory(response)
    })
  })

  const registerPlayer = () => {
    socket.emit('register', {name: playerName})
    socket.on('registered', data => {
      if(data.ok) {
        console.log('registered successfuly')
        setErrorMessage('')
        setIsRegistered(true)
      } else {
        setErrorMessage(data.message)
        setIsRegistered(false)
      }
    })
  }

  const unRegisterPlayer = () => {
    socket.emit('un_register', {name: playerName})
    socket.on('un_registered', data => {
      if(data.ok) {
        console.log('unregistered successfuly')
        setErrorMessage('')
      } else {
        setErrorMessage(data.message)
        setIsRegistered(false)
      }
    })
  }

  const handleRegisterInput = (e) => {
    let value = e.target.value;
    if (value.trim() !== "" || value !== null || value !== undefined) {
      setPlayerName(value)
    }
  }

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
    })
  }

  const resetStory = () => {
    socket.emit('reset_story', "")
    socket.on('story', response => {
      setStory(response)
    })
  }

  return (
    <div>
      { isRegistered ?
        <div>
          <p>Player name: {playerName}</p>
          <h1>{story}</h1>
          <input type="text" name="word" onChange={handleInput}></input>
          <button onClick={submitWord}>Submit</button>
          <button onClick={resetStory}>Reset</button>
        </div>
        :
        <div>
          <input type="text" name="word" onChange={handleRegisterInput}></input>
          <button onClick={registerPlayer}>Join</button>
          <button onClick={unRegisterPlayer}>Unregister</button>
          <p>{errorMessage}</p>
        </div>
      }
    </div>
  );
}

export default App;