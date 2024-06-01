import React from "react";

const Player = ({ player, totalScore, currentScore, isWinner }) => {
  return (
    <div className={`player-${player}`}>
      <div>
        <p className="players-font-size">PLAYER {player}</p>
        <p className="score">{totalScore}</p>
      </div>
      <h1 className={`you-won ${isWinner ? "" : "hidden"}`}>You Won</h1>
      <img
        className={`win-gif ${isWinner ? "" : "hidden"}`}
        src="/images/12f6accc21f3cad0047fc68fc282569c.gif"
        alt={`Player ${player} Wins!`}
      />
      <div className="current-score">
        <p>CURRENT SCORE</p>
        <p>{currentScore}</p>
      </div>
    </div>
  );
};

export default Player;
