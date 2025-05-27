import React from 'react';
import { useTheme } from './ThemeContext';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>현재 태마: {theme.theme}</button>;
};
