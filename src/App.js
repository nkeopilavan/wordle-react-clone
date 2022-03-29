import './App.css';
import Grid from './components/Grid';
import Letters from './components/Letters';
import { createContext, useEffect, useState } from 'react'
import { boardStart, generateWordSet } from './Matrix';
import GameOver from './components/GameOver';

//Used to gather data from the app components
export const ContextApp = createContext();

function App() {
  //Declare states that are able to be used by all parts of the program
  const [grid, setGrid] = useState(boardStart);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letter: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});

  //Generate a new word on startup from a bank of words, stored into a setCorrectWord
  useEffect(() => {
      generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  //Handles the enter key as a guess, doesn't do anything if not all 5 leters, and checks word when all 5 are present
  const onEnter = () => {
    if (currentAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += grid[currentAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  //Delete the current letter that the program is current on
  const onDelete = () => {
    if (currentAttempt.letter === 0) return;
    const newBoard = [...grid];
    newBoard[currentAttempt.attempt][currentAttempt.letter - 1] = "";
    setGrid(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter - 1 });
  };

  //Tracker to keep track of the curret letter and the attempt row that the program is on
  const onCurrentLetter = (key) => {
    if (currentAttempt.letter > 4) return;
    const newBoard = [...grid];
    newBoard[currentAttempt.attempt][currentAttempt.letter] = key;
    setGrid(newBoard);
    setCurrentAttempt({
      attempt: currentAttempt.attempt,
      letter: currentAttempt.letter + 1,
    });
  };

  //Returned component with values sent to other components from this APP file into other React components
  return (
    <div className="App">
      <nav>
        <h1>Wordle Clone by Nathan</h1>
      </nav>
      <ContextApp.Provider value={{
          grid,setGrid,
          currentAttempt, setCurrentAttempt,
          correctWord, onCurrentLetter,
          onDelete, onEnter,
          setDisabledLetters, disabledLetters,
          gameOver,
        }}>
        <div className="game">
          <Grid />
          {gameOver.gameOver ? <GameOver/> : <Letters />}
        </div>
      </ContextApp.Provider>
    </div>
  );
}

export default App;
