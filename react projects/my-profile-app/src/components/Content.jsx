import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../Contexts/ThemeContext";

function Content() {
    const {theme} = useContext(ThemeContext);
    const inpref = useRef(null);
    
    useEffect(() => {
        inpref.current.focus()
    },[])

    return (
        <div className={`app-content ${theme}`}>
            <p>Main Content: Theme is: {theme === 'dark'?'light':'dark'}</p>
            <input type="text" ref={inpref} placeholder="Focus here" />
        </div>
    )
}

export default Content