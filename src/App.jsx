import React, { useState } from "react";
import Player from "./components/Player";
import Dice from "./components/Dice";
import GameInstructions from "./components/GameInstructions";
import "./App.css";

const App = () => {
  const [targetScore, setTargetScore] = useState(50);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1CurrentScore, setPlayer1CurrentScore] = useState(0);
  const [player2CurrentScore, setPlayer2CurrentScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);

    const currentScore = newDice1 + newDice2;

    if (currentPlayer === 1) {
      const newCurrentScore = player1CurrentScore + currentScore;
      const newTotalScore = player1Score + currentScore;
      setPlayer1CurrentScore(newCurrentScore);
      setPlayer1Score(newTotalScore);
      if (newTotalScore >= targetScore) {
        setWinner(1);
      } else {
        setCurrentPlayer(2);
      }
    } else {
      const newCurrentScore = player2CurrentScore + currentScore;
      const newTotalScore = player2Score + currentScore;
      setPlayer2CurrentScore(newCurrentScore);
      setPlayer2Score(newTotalScore);
      if (newTotalScore >= targetScore) {
        setWinner(2);
      } else {
        setCurrentPlayer(1);
      }
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <Player
        player={1}
        totalScore={player1Score}
        currentScore={player1CurrentScore}
        isWinner={winner === 1}
      />
      <div className="middle-layer">
        <button onClick={refreshPage} className="new-game" id="specialButton">
          NEW GAME
        </button>
        <Dice dice1={dice1} dice2={dice2} rollDice={rollDice} />
        <div className="rool-dice-hold-buttons">
          <button onClick={rollDice} id="changeDice">
            ROLL DICE
          </button>
        </div>
      </div>
      <Player
        player={2}
        totalScore={player2Score}
        currentScore={player2CurrentScore}
        isWinner={winner === 2}
      />
      <GameInstructions setTargetScore={setTargetScore} />
    </div>
  );
};

export default App;
