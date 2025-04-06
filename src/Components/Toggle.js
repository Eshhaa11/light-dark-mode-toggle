import { useEffect, useState } from "react";
import './Toggle.css'

function Toggle () {
    const [darkmode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDarkMode(prev => !prev);
        }, 2000); 

        return () => clearInterval(interval); 
    }, []);


    return (
        <div className={darkMode ? 'app dark' : 'app light'}>
            
        <button onClick={toggleTheme}>
            Switch to {darkmode? 'Light' : 'Dark'} Mode
        </button>
            <h1>Welcome to my page! </h1>
        </div>
    )
}

export default Toggle;