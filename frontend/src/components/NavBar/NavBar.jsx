import React, { useState, useRef } from 'react';
import "./NavBar.css";
import { SiLeetcode,SiLinkedin,SiGithub } from 'react-icons/si';

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
    clearInterval(intervalRef.current);
    setDisplayedText(originalText);
  };

  return (
    <>
      <div id='home' className='nav-container'>
        <div
        style={{display:"flex",justifyContent:"space-between",width:"20%",alignItems:"center"}}
          className="LogoTextContainer"
        
        >
         <div
           onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}>
          {displayedText}
</div>           
         <a target='-blank' href="https://leetcode.com/u/zuri10"><SiLeetcode className='link-icon-leetcode' style={{ gap:"15px" }} /></a> 
          <a target='-blank' href="https://www.linkedin.com/in/mohdyavar/"><SiLinkedin className='link-icon-linkedin' style={{ gap:"15px" }} /></a>
          <a target='_blank' href="https://github.com/Yavar10"><SiGithub className='link-icon-github' style={{ gap:"15px" }} /></a>

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

