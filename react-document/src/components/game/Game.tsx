import React, { useState } from 'react';
import { Board } from './Board';
import { History } from './History';
import { calculateWinner } from '../../hook/game/calculateWinner';

export const Game = () => {
  const [squares, setSquares] = useState<(null | string)[]>(
    Array(9).fill(null)
  );
  const [isValueX, setIsValueX] = useState(true);
  const [histories, setHistories] = useState<(string | null)[][]>([]);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;
    const nextSquares = squares?.slice();
    nextSquares[index] = isValueX ? 'x' : 'o';
    setIsValueX(!isValueX);
    setSquares(nextSquares);
    setHistories((prev) => [...prev, nextSquares]);
  };

  const handleJump = (index: number) => {
    setSquares(histories[index - 1]);
    setIsValueX((index + 1) % 2 === 0);
  };

  const winner = calculateWinner(squares);
  let status;
  const filledCount = squares.filter((square) => square !== null).length;
  if (winner) {
    status = 'winner: ' + winner;
  } else if (filledCount === squares.length) {
    status = 'draw';
  } else {
    status = 'next player: ' + (isValueX ? 'o' : 'x');
  }
  return (
    <div>
      <div>
        <Board
          // setHistories={setHistories}
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
