import React from 'react'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div id='home' className='nav-container'>
      <div  className="LogoText">
      Yavar
      </div>
      <div className="navOptions">
        <div><a style={{ color: "inherit", textDecoration: "none" }} href="#home">Home</a></div>
        <div><a style={{ color: "inherit", textDecoration: "none" }} href="#about">About</a></div>
        <div><a style={{ color: "inherit", textDecoration: "none" }} href="#work">Work</a></div>
        <div>Contact</div>
        </div>
    </div>
  )
}

export default NavBar
