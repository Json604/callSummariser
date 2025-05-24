import { createContext } from "react";
import { ThemeType,ProviderType } from "../types/themeType";

const theme = {
    primary:'#A276F8',
    secondary:'#4812AE',
    background:'black',
    text:'white',
    subtext:'grey',
    card:'black',
    placeholderText:'grey',
    outline:'rgba(255,255,255,0.1)',
}

export const ThemeContext = createContext<ThemeType>(theme);

export const ThemeProvider = ({children}: ProviderType) => {
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}