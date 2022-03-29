import React, { useContext, useEffect} from "react";
import {ContextApp} from "../App"

//States and hooks to update a box to the user's guessed letter
function GuessLetter({position, attemptNum}) {
    const { grid, setDisabledLetters, currentAttempt, correctWord } = useContext(ContextApp);
    
    const guess = grid[attemptNum][position];

    const correct = correctWord.toUpperCase()[position] === guess;

    const almost = !correct && guess !== "" && correctWord.toUpperCase().includes(guess);

    const letterState = currentAttempt.attempt > attemptNum && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (guess !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, guess]);
        }
    }, [currentAttempt.attempt]);

    return (<div className="letter" id={letterState}> {guess} </div>);
}

export default GuessLetter;