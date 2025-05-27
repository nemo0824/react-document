import { createContext, useContext, useState } from 'react';

interface ThemeType {
  theme: 'light' | 'dark';
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>({ theme: 'light' });
  const toggleTheme = () =>
    setTheme((prev) => ({ theme: prev.theme === 'light' ? 'dark' : 'light' }));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme ');
  return context;
};
