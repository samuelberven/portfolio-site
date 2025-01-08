import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext(undefined);
// Update the ThemeProvider component to accept `children`
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
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
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
};
//# sourceMappingURL=ThemeContext.js.map