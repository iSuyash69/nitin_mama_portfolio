"use client"

import { createContext, useEffect, useState } from "react"

export const ThemeContext=createContext(null);

const ThemeContextProvider=({children})=>{

    const [isMounted, setIsMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(storedMode);
        setIsMounted(true); 
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("darkMode", darkMode);
        }
    }, [darkMode, isMounted]);

    if (!isMounted) return null;

    return(
        <ThemeContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;