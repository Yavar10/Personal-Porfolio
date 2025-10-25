import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"black",position:"relative",height:"800px",display:"flex",alignItems:"center"}}>
      <div style={{color:"white",position:"absolute",fontSize:"500px",zIndex:"0"}}>2025</div>
      <div style={{width:"100%", background: "linear-gradient(to right, black 0%,rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",color:"white",position:"absolute",fontSize:"50px",zIndex:"1"}}>© Mohd Yavar</div>
    </div>
  )
}

export default Footer
