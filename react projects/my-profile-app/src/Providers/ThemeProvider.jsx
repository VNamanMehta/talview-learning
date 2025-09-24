import { useEffect, useState } from "react";
import ThemeContext from "../Contexts/ThemeContext";

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => setTheme(prevTheme=>(prevTheme==='light'?'dark':'light'))

    useEffect(() => {
        document.body.className = `${theme}-theme`
    },[theme])
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider