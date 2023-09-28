import React from 'react';

import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults'

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

    const [guessList, setGuessList] = React.useState([])
    
    function handleSubmitGuess(guess) {
        const nextGuessList = [...guessList, guess]
        setGuessList(nextGuessList)
    }

    return (
        <>
            <GuessResults guessList={guessList} answer={answer} />
            <GuessForm handleSubmitGuess={handleSubmitGuess} />
        </>
    );
}

export default Game;
