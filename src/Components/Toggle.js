import { useState } from "react";
import './Toggle.css'

function Toggle () {
    const [darkmode, setDarkMode] = useState("false")

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };


    return (
        <div className={darkMode ? 'app dark' : 'app light'}>
            
        <button onClick={toggleTheme}>
            Switch to {darkmode? 'Light' : 'Dark'} Mode
        </button>
            <h1>GOOGLE </h1>
        </div>
    )
}