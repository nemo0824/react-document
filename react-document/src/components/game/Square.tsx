import React from 'react';

interface SquareProps {
  value: null | string;
  handleClick: () => void;
}

export const Square = ({ value, handleClick }: SquareProps) => {
  return (
    <button
      onClick={handleClick}
      className="border border-gray-300 w-32 h-32 m-0.5 font-bold text-2xl"
    >
      {value}
    </button>
  );
};
