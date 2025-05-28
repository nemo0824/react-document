import React from 'react';
import { Square } from './Square';

interface BoardProps {
  // setHistories: React.Dispatch<React.SetStateAction<(string | null)[][]>>;
  handleClick: (index: number) => void;
  status: string;
  squares: (string | null)[];
}

export const Board = ({
  // setHistories,
  handleClick,
  status,
  squares,
}: BoardProps) => {
  return (
    <>
      <h3>{status}</h3>
      <section className="border-1 border-gray-500 w-fit">
        <div className="flex">
          <Square value={squares[0]} handleClick={() => handleClick(0)} />
          <Square value={squares[1]} handleClick={() => handleClick(1)} />
          <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} handleClick={() => handleClick(3)} />
          <Square value={squares[4]} handleClick={() => handleClick(4)} />
          <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} handleClick={() => handleClick(6)} />
          <Square value={squares[7]} handleClick={() => handleClick(7)} />
          <Square value={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </section>
    </>
  );
};
