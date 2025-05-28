import React from 'react';

interface HistoryProps {
  index: number;
  handleJump: (index: number) => void;
}

export const History = ({ index, handleJump }: HistoryProps) => {
  return (
    <li>
      <button onClick={() => handleJump(index)}>
        {index === 0 ? 'go to game start' : `go to move ${index}`}
      </button>
    </li>
  );
};
