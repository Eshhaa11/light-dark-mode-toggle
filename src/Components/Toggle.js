import { useState } from "react";
import './Toggle.css'

function Toggle () {
    const [darkmode, setDarkMode] = useState("false")

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };


    return (
        <div className= {darkmode ? 'app dark' : 'app light'}>
        <button onClick={toggleTheme}>
            
        </button>
            <h1>GOOGLE</h1>
        </div>
    )
}