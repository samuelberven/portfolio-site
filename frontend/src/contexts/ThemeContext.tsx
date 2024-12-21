import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

// Define the props type to include `children` prop
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Update the ThemeProvider component to accept `children`
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  // Instead of using string for the theme, you could define a type for it (e.g., 'light' | 'dark').
  // const [theme, setTheme] = useState<'light' | 'dark'>('light');


  // On mount, check for the saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};