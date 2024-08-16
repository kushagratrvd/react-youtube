import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themecolour: "light",
    lightmode : () => {},
    darkmode : () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
    
}