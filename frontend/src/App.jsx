import { useEffect, useRef, useState } from 'react';
import "./App.css";
import x from "./assets/x.svg";
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Work from './components/Work/Work';
import TechLogoLoop from './components/TechLogoLoop';

const App = () => {
  const videoRef = useRef(null);
  const [closeMark,setCloseMark]=useState("flex");
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const loopStart = 0; 
      let loopEnd = 0;   

      const handleLoadedMetadata = () => {
        loopEnd = video.duration - 5.2; 
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= loopEnd && loopEnd > 0) {
          video.currentTime = loopStart; 
          video.play();
        }
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("playing", () => setIsVideoLoading(false));
      video.addEventListener("waiting", () => setIsVideoLoading(true));

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("playing", () => setIsVideoLoading(false));
        video.removeEventListener("waiting", () => setIsVideoLoading(true));
      };
    }
  }, []);

  return (
    <div className='main-container-home-page app'>
        <div style={{display:`${closeMark}`}} className='under-construction'>
          <marquee behavior="infinite" direction="left">Under-Construction</marquee>
          <div className='close-marquee'><img onClick={()=>{setCloseMark("none")}} style={{ height:"100%",width:"100%"}} src={x} alt="" /></div>
        </div>
        <NavBar />
      <div className="video-container">
        {isVideoLoading && (
          <div className="video-loading">
            Loading video...
          </div>
        )}
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
      <br />
      <br />
      <TechLogoLoop/>
      <Work/>
    </div>
  )
}

export default App
