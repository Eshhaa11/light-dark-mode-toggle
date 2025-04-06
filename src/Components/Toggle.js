import { useState, useEffect } from "react";
import './Toggle.css';

function Toggle() {
  const [darkmode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkmode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkmode ? "black" : "white";
    document.body.style.color = darkmode ? "white" : "black";
  }, [darkmode]);

  return (
    <div className="toggle-container">
      <div className={`toggle-switch ${darkmode ? 'dark' : 'light'}`} onClick={toggleTheme}>
        <div className="toggle-slider"></div>
      </div>
      <h1>Welcome to this page!</h1>
    </div>
  );
}

export default Toggle;
