import React, { useState } from "react";
import GuessLetter from "./GuessLetter";

//Creates the 6x5 grid used for 6 guesses of 5 letter words, all boxes are treated as a singular component
function Grid() {
    return (
    <div className="grid">
        {" "}
        <div className="row">
            <GuessLetter position={0} attemptNum={0} />
            <GuessLetter position={1} attemptNum={0} />
            <GuessLetter position={2} attemptNum={0} />
            <GuessLetter position={3} attemptNum={0} />
            <GuessLetter position={4} attemptNum={0} />
        </div>
        <div className="row">
            <GuessLetter position={0} attemptNum={1} />
            <GuessLetter position={1} attemptNum={1} />
            <GuessLetter position={2} attemptNum={1} />
            <GuessLetter position={3} attemptNum={1} />
            <GuessLetter position={4} attemptNum={1} />
        </div>
        <div className="row">
            <GuessLetter position={0} attemptNum={2} />
            <GuessLetter position={1} attemptNum={2} />
            <GuessLetter position={2} attemptNum={2} />
            <GuessLetter position={3} attemptNum={2} />
            <GuessLetter position={4} attemptNum={2} />
        </div>
        <div className="row">
            <GuessLetter position={0} attemptNum={3} />
            <GuessLetter position={1} attemptNum={3} />
            <GuessLetter position={2} attemptNum={3} />
            <GuessLetter position={3} attemptNum={3} />
            <GuessLetter position={4} attemptNum={3} />
        </div>
        <div className="row">
            <GuessLetter position={0} attemptNum={4} />
            <GuessLetter position={1} attemptNum={4} />
            <GuessLetter position={2} attemptNum={4} />
            <GuessLetter position={3} attemptNum={4} />
            <GuessLetter position={4} attemptNum={4} />
        </div>
        <div className="row">
            <GuessLetter position={0} attemptNum={5} />
            <GuessLetter position={1} attemptNum={5} />
            <GuessLetter position={2} attemptNum={5} />
            <GuessLetter position={3} attemptNum={5} />
            <GuessLetter position={4} attemptNum={5} />
        </div>
    </div>
    );
}

export default Grid