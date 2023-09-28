import React from 'react';

import { range } from '../../utils.js'
import { checkGuess } from '../../game-helpers.js'

function Guess({ value, answer }) {
    
    return (
        <p className="guess">
            {range(5).map(num => (
                <span key={num} className={`cell`}>
                    {value ? value[num] : ''}
                </span>
            ))}
        </p>
    );
}

export default Guess;
