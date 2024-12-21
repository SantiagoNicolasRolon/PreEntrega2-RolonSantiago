import {createContext, useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(false)

    function toggleTheme() {
        setDarkMode(!isDarkMode)
    }

    return (
        <ThemeProvider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeProvider>
    )
}