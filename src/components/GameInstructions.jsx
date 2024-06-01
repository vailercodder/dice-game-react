import React, { useState } from "react";

const GameInstructions = ({ setTargetScore }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [score, setScore] = useState("");

  const handleSubmit = () => {
    if (score) {
      setTargetScore(Number(score));
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div id="input-container">
        <h1>Game Instructions:</h1>
        <ol>
          <li>Dice rolls automatically</li>
          <li>First one to reach the target points wins</li>
          <li>Good luck, I guess</li>
        </ol>
        <h2>Please select a target score</h2>
        <input
          type="number"
          id="number-input"
          placeholder="Enter a Target score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button id="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    )
  );
};

export default GameInstructions;
