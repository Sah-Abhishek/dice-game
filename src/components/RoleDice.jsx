import styled from "styled-components";
import { useState } from "react";

const RoleDice = () => {

  const [currentDice, setCurrentDice ] = useState();

  const generateRandomNumber = (min , max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    const ramdomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
  }

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src="/images/dice/dice_1.png" alt="dice 1"/>
      </div>
      <p>Click one the dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;

  }
`;