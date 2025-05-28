import React from 'react';
import { Square } from './Square';

interface BoardProps {
  handleClick: (index: number) => void;
  status: string;
  squares: (string | null)[];
}

const BOARD_ROW = [0, 3, 6];

export const Board = ({ handleClick, status, squares }: BoardProps) => {
  return (
    <>
      <h3>{status}</h3>
      <section className="border-1 border-gray-500 w-fit">
        {BOARD_ROW.map((start) => (
          <div key={start} className="flex">
            <Square
              value={squares[start]}
              handleClick={() => handleClick(start)}
            />
            <Square
              value={squares[start + 1]}
              handleClick={() => handleClick(start + 1)}
            />
            <Square
              value={squares[start + 2]}
              handleClick={() => handleClick(start + 2)}
            />
          </div>
        ))}
      </section>
    </>
  );
};
