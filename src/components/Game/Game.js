import React from 'react';

import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

    const [guessList, setGuessList] = React.useState([])
    const [gameStatus, setGameStatus] = React.useState('running')
    
    function handleSubmitGuess(guess) {
        const nextGuessList = [...guessList, guess]
        setGuessList(nextGuessList)
        
        if (guess === answer) {
            setGameStatus('win')
        } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lose')
        }
    }

    return (
        <>
            <GuessResults guessList={guessList} answer={answer} />
            <GuessForm 
                handleSubmitGuess={handleSubmitGuess} 
                gameStatus={gameStatus}
            />
            {gameStatus === 'win' && (
                <WonBanner numGuesses={guessList.length} />
            )}
            {gameStatus === 'lose' && (
                <LostBanner answer={answer} />
            )}
        </>
    );
}

export default Game;
