import React, { useCallback, useContext, useEffect } from "react";
import { ContextApp } from "../App";
import KeyBox from "./KeyBox";

function Letters() {
    //Stores 3 default list of letters that we use to display the letters onto the website
    const list1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const list2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const list3 = ["Z", "X", "C", "V", "B", "N", "M"];

    //Create many different states to keep track of

    const { grid, disabledLetters, currentAttempt, gameOver, onCurrentLetter, onEnter, onDelete } = useContext(ContextApp);

    //Checks and updates the keyboard for what letters are present and not present
    const updateKeyboard = useCallback((event) => {
          if (gameOver.gameOver) return;
          if (event.key === "Enter") {
            onEnter();
          } else if (event.key === "Backspace") {
            onDelete();
          } else {
            list1.forEach((key) => {
              if (event.key.toLowerCase() === key.toLowerCase()) {
                onCurrentLetter(key);
              }
            });
            list2.forEach((key) => {
              if (event.key.toLowerCase() === key.toLowerCase()) {
                onCurrentLetter(key);
              }
            });
            list3.forEach((key) => {
              if (event.key.toLowerCase() === key.toLowerCase()) {
                onCurrentLetter(key);
              }
            });
          }
        },
        [currentAttempt]
      );
      useEffect(() => {
        document.addEventListener("keydown", updateKeyboard);

        return () => {
            document.removeEventListener("keydown", updateKeyboard);
        };
    }, [updateKeyboard]);

    //Handles the keyboard component, allowing the user to press the keys to simulate key presses
    return (
    <div className="keyboard" onKeyDown={updateKeyboard}>
        <div className="line1">{list1.map((key) => {
            return <KeyBox value={key} disabled={disabledLetters.includes(key)}/>;
        })}
        </div>
        <div className="line2">
            {list2.map((key) => {
                return <KeyBox value={key} disabled={disabledLetters.includes(key)}/>;
            })}
        </div>
        <div className="line3">
            <KeyBox value={"RET"} />
            {list3.map((key) => {
                return <KeyBox value={key} disabled={disabledLetters.includes(key)}/>;
            })}
            <KeyBox value={"DEL"} />
        </div>
    </div>
    );
}

export default Letters;