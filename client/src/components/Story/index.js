import React from 'react'

function Story(props) {
    let { handleInput, submitWord, resetStory } = props.methods;
    return (
        <div>
            <h1>{props.story}</h1>
            <input type="text" name="word" onChange={handleInput}></input>
            <button onClick={submitWord}>Submit</button>
            <button onClick={resetStory}>Reset</button>
        </div>
        
    )
}

export default Story;