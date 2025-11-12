import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  backUrl?: string;
}

export const Title = ({ children, backUrl }: TitleProps) => {
  if (backUrl) {
    return (
      <div className="text-blue-500 font-bold py-4 bg-white text-center relative">
        <a href={backUrl} className="absolute left-4">
          {' '}
          ←
        </a>
        <h1>{children}</h1>
      </div>
    );
  }
  return <h1 className="text-blue-500 font-bold p-4 bg-white">{children}</h1>;
};
