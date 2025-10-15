import React, { useState, useRef } from 'react';
import "./NavBar.css";

const NavBar = () => {
  const originalText = "Yavar";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [displayedText, setDisplayedText] = useState(originalText);
  const intervalRef = useRef(null);

  const handleMouseOver = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const newText = originalText
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
        
      setDisplayedText(newText);

      // Stop the interval once the original text is revealed
      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 10;
    }, 30);
  };

  const handleMouseLeave = () => {
    // Stop any running animation and reset the text
    clearInterval(intervalRef.current);
    setDisplayedText(originalText);
  };

  return (
    <>
      <div id='home' className='nav-container'>
        <div
          className="LogoText"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {displayedText}
        </div>
        <div className="navOptions">
          <div><a style={{ color: "inherit", textDecoration: "none" }} href="#home">Home</a></div>
          <div><a style={{ color: "inherit", textDecoration: "none" }} href="#about">About</a></div>
          <div><a style={{ color: "inherit", textDecoration: "none" }} href="#work">Work</a></div>
          <div><a style={{ color: "inherit", textDecoration: "none" }} href="#contact">Contact</a></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

