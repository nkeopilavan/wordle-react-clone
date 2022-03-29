import React, { useContext } from "react";
import { ContextApp } from "../App";

//Key box is treated as a singular box used for guesses
function KeyBox({ value, disabled }) {
    const { gameOver, onCurrentLetter, onDelete, onEnter } = useContext(ContextApp);

    const getLetter = () => {
        if (gameOver.gameOver){
            return;
        }
        if (value === "ENTER") {
            onEnter();
        } else if (value === "DELETE") {
            onDelete();
        } else {
            onCurrentLetter(value);
        }
    };

    return <div className="key" id={disabled && "disabled"} onClick={getLetter}>{value}</div>;
}

export default KeyBox;