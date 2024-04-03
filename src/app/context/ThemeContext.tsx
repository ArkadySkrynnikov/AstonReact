import { createContext, useState, useMemo, ReactNode, useEffect } from 'react'

type Theme = 'light' | 'grey'

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
})

type Props = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = (): void => {
        setTheme((prev) => (prev === 'light' ? 'grey' : 'light'))
    }

    const contextValue = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme],
    )

    useEffect(() => {
        document.body.style.backgroundColor =
            theme === 'light' ? '#ffffff' : '#D9DDDC'
    }, [theme])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
