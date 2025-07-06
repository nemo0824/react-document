import React from 'react';

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-blue-500 font-bold p-4">{children}</h1>;
};
