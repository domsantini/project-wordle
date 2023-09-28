import React from 'react';

import GuessResults from '../GuessResults';

function GuessForm({ handleSubmitGuess }) {
    
    const [guess, setGuess] = React.useState('')
    
    function handleSubmit(event) {
        event.preventDefault()
        handleSubmitGuess(guess)
        setGuess('')
    }
     
    return (
        <>
            <form className='guess-input-wrapper' onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input 
                    type="text"
                    id='guess-input'
                    pattern='[a-zA-Z]{5}'
                    title='5 letter word'
                    value={guess}
                    onChange={event => {
                        setGuess(event.target.value.toUpperCase())
                    }}
                />
            </form>
        </>
    );
}

export default GuessForm;
