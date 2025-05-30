import React, { useState } from 'react';
import { Board } from './Board';
import { History } from './History';
import { calculateWinner } from '../../hook/game/calculateWinner';

export const Game = () => {
  const [histories, setHistories] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const squares = histories[currentStep];
  const isValueX = currentStep % 2 === 0;

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[index] = isValueX ? 'x' : 'o';
    const nextHistories = [...histories.slice(0, currentStep + 1), nextSquares];

    setHistories(nextHistories);
    setCurrentStep(nextHistories.length - 1);
  };

  const handleJump = (index: number) => {
    setCurrentStep(index);
  };

  const winner = calculateWinner(squares);
  let status;
  const filledCount = squares.filter((square) => square !== null).length;
  if (winner) {
    status = 'winner: ' + winner;
  } else if (filledCount === 9) {
    status = 'draw';
  } else {
    status = 'next player: ' + (isValueX ? 'o' : 'x');
  }
  return (
    <div>
      <div>
        <Board
          handleClick={handleClick}
          status={status}
          squares={squares}
        ></Board>
      </div>
      <div>
        <ul>
          {histories.map(
            (history, index) =>
              history !== null && (
                <History key={index} index={index} handleJump={handleJump} />
              )
          )}
        </ul>
      </div>
    </div>
  );
};
