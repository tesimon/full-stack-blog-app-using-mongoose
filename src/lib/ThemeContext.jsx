 "use client"
 
 import { createContext, useEffect, useState } from 'react';
 
 export const ThemeContext = createContext()
  

 const getLocalStorage = ()=> {
    if(typeof window !== 'undefined' ){
    const value =  localStorage.getItem("theme");
    return value 
}

}

const ThemeContextApi =  ({children})=>{
    const themeValue = getLocalStorage();
    const [ theme, setTheme] = useState(themeValue)

    const toggleThemes = () => setTheme(theme === "dark" ? "light" : "dark" )

    useEffect(()=> localStorage.setItem("theme",theme),[theme])
    
        // Check if the user's system preference is dark
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (themeValue === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.theme = "dark"
  } else {
    localStorage.theme = "light"
  } 
    return (
        <ThemeContext.Provider value={{theme,toggleThemes}}>
          {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextApi