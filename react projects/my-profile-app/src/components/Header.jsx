import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

function Header() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <header className={`app-header ${theme}`}>
            <h2>Theme Switcher</h2>
            <button onClick={toggleTheme}>
                Switch to {theme==='light'?'dark':'light'} Mode
            </button>
        </header>
    )
}

export default Header