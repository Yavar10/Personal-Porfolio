import { useEffect, useRef, useState } from 'react';
import "./App.css";

import x from "./assets/x.svg";

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ProfileCard from './components/Profile/ProfileCard';
import TechLogoLoop from './components/TechLogoLoop';
import Work from './components/Work/Work';

const App = () => {
  const videoRef = useRef(null);

  const [closeMark, setCloseMark] = useState("flex");
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

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

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("canplaythrough", handleCanPlay);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <div className='main-container-home-page app'>

      <div
        style={{ display: closeMark }}
        className='under-construction'
      >
        <marquee behavior="infinite" direction="left">
          Under-Construction
        </marquee>

        <div className='close-marquee'>
          <img
            onClick={() => setCloseMark("none")}
            style={{ height: "100%", width: "100%" }}
            src={x}
            alt=""
          />
        </div>
      </div>

      <NavBar />

      {/* Video only appears when ready */}
      {isVideoReady && (
        <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="bg-video"
          >
            <source
              src="/ChatGPT  The Intelligence Age - OpenAI (1080p, h264).mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {/* Hidden preload video */}
      {!isVideoReady && (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          style={{ display: "none" }}
        >
          <source
            src="/ChatGPT  The Intelligence Age - OpenAI (1080p, h264).mp4"
            type="video/mp4"
          />
        </video>
      )}

      <section className="hero-section">
        <div className="hero-card-container">
          <ProfileCard
            avatarUrl="/meh.jpeg"
            miniAvatarUrl="/meh.jpeg"
            name="Mohd Yavar"
            title="Software Engineer"
            handle="Yavar10"
            status="Available"
          />
        </div>
        <div className="hero-info">
          <div className="info-content">
            <h2>Creative Developer</h2>
            <p className="subtitle">Building experiences through code</p>
            
            <div className="info-sections">
              <div className="info-block">
                <h3>Focus</h3>
                <ul>
                  <li>Frontend Development</li>
                  <li>UI/UX Design</li>
                  <li>Web Performance</li>
                </ul>
              </div>
              
              <div className="info-block">
                <h3>Stack</h3>
                <ul>
                  <li>React & TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                </ul>
              </div>
              
              <div className="info-block">
                <h3>About</h3>
                <p className="about-text">Passionate about creating beautiful, functional digital products with attention to detail and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />

      <br />
      <br />

      <TechLogoLoop />

      <Work />

      <Footer />
    </div>
  );
};

export default App;