import React from 'react'
import "./App.css"
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div className='main-container-home-page app'>
      <NavBar/>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/ChatGPT  The Intelligence Age - OpenAI (1080p, h264).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default App
