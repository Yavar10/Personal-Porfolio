import React, { useRef, useEffect } from 'react'
import "./App.css"
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About';

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const loopStart = 0; 
      let loopEnd = 0;   

      const handleLoadedMetadata = () => {
        loopEnd = video.duration - 5; 
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= loopEnd && loopEnd > 0) {
          video.currentTime = loopStart; 
          video.play();
        }
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div className='main-container-home-page app'>
        <NavBar />
      <div>
        <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="bg-video">
        <source src="/ChatGPT  The Intelligence Age - OpenAI (1080p, h264).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      <About/>
    </div>
  )
}

export default App
