import React from "react";

const Dice = ({ dice1, dice2, rollDice }) => {
  return (
    <div className="dice-position">
      <div className="container">
        <div id="slider">
          <img
            id="picture1"
            src={`/images/dice-${dice1}.png`}
            className="active"
            alt={`Dice ${dice1}`}
          />
        </div>
      </div>
      <div className="container">
        <div id="slider">
          <img
            id="picture2"
            src={`/images/dice-${dice2}.png`}
            className="active"
            alt={`Dice ${dice2}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dice;
