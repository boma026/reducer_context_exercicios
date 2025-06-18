import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type themeContextType = {
    isBlack: boolean,
    setIsBlack: (bool: boolean) => void,
}

export const themeContext = createContext<themeContextType | null>(null);

type themeProviderType ={
    children: ReactNode;
}

export const ThemeContextProvider = ({children}: themeProviderType) => {
    const [isBlack, setIsBlack] = useState(false);

    const STORAGE_THEME = "themeStorageContent";

    useEffect(() => {
        
        const stored = localStorage.getItem(STORAGE_THEME);
        if(stored){
            const black = JSON.parse(stored);
            setIsBlack(black);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_THEME, JSON.stringify(isBlack));

    }, [isBlack])

    return (
        <themeContext.Provider value={{ isBlack, setIsBlack }}>
            {children}
        </themeContext.Provider>
    )
    
}

export const useTheme = () => useContext(themeContext);
