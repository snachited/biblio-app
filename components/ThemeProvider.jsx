'use client';
import { createContext, useContext, useEffect, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Define a React component called ThemeProvider to provide the theme to its children
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.className = savedTheme; // Apply theme to body
    }, []);

    useEffect(() => {
        document.body.className = theme; // Update theme on body
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

// Define a custom hook useTheme to use the current theme
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    const [theme, setTheme] = context;
    const setThemeWithStorage = (newTheme) => {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };
    return [theme, setThemeWithStorage];
}
