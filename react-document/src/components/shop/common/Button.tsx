import React from 'react';

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'sm' | 'md' | 'lg';
  styleColor: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button = ({
  children,
  styleColor = 'primary',
  size = 'md',
  ...rest
}: PropsButton) => {
  const styleList = {
    primary: 'bg-blue-400 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-black hover:bg-gray-200',
    outline: 'border border-gray-300 text-black hover:bg-gray-50',
    ghost: 'bg-transparent text-black hover:bg-gray-100',
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };
  return (
    <button
      {...rest}
      className={`${sizes[size]} ${styleList[styleColor]} rounded cursor-pointer`}
    >
      {children}
    </button>
  );
};
