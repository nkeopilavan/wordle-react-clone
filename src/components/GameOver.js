import React, { useContext } from "react";
import { ContextApp } from "../App";

//React component used to check if game is over, if so, change the layout of the page.
function GameOver() {
    const { currentAttempt, gameOver, correctWord } = useContext(ContextApp);

    return (
    <div>
        <h3>
            {gameOver.guessedWord ? "You Got the Word!" : "Wrong Word"}
        </h3>
        <h1>
            Correct Word: {correctWord}
        </h1>
        {gameOver.guessedWord && (
            <h3>You guessed in {currentAttempt.attempt} attempts</h3>
        )}
    </div>
    );
}

export default GameOver;