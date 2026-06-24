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

      {/* Single video element - hidden while preloading, shown when ready */}
      <div className="video-container" style={{ display: isVideoReady ? "block" : "none" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="bg-video"
        >
          <source
            src="/ChatGPT  The Intelligence Age - OpenAI (1080p, h264).mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <section className="hero-section">
        {/* Corner labels */}
        <div className="corner-label top-left">MY</div>
        <div className="corner-label top-right">BASED IN INDIA</div>
        <div className="corner-label bottom-left">OPEN TO OPPORTUNITIES</div>
        <div className="corner-label bottom-right">
          <span>→</span> LET'S BUILD SOMETHING GREAT
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-card-container">
            <div className="card-column">
              <ProfileCard
                avatarUrl="/meh.jpeg"
                miniAvatarUrl="/meh.jpeg"
               onContactClick={() => {
    window.location.href = "mailto:yavarahmad21@gmail.com";
  }}
                name="Mohd Yavar"
                title="SOFTWARE ENGINEER"
                handle="Yavar10"
                status="AVAILABLE"
              />
              
              {/* Elegant Philosophy & Links */}
              <div className="card-footer-content">
                <p className="philosophy-text">
                  Bridging the gap between aesthetic design and robust engineering to build pixel-perfect, engaging digital experiences.
                </p>
                <div className="social-links">
                  <a href="https://github.com/Yavar10" target="_blank" rel="noreferrer">GITHUB ↗</a>
                  <a href="https://linkedin.com/in/mohd-yavar" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
                  <a href="https://x.com/yavar10_" target="_blank" rel="noreferrer">TWITTER ↗</a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-info">
            <div className="info-content">
              <h2>Creative<br/>Developer</h2>
              <p className="subtitle">Building experiences<br/>through code</p>
              
              <div className="info-sections">
                <div className="info-block">
                  <h3>FOCUS</h3>
                  <div className="block-content">
                    <ul>
                      <li>Frontend Development</li>
                      <li>UI/UX Design</li>
                      <li>Web Performance</li>
                    </ul>
                  </div>
                </div>
                
                <div className="info-block">
                  <h3>STACK</h3>
                  <div className="block-content">
                    <ul>
                      <li>React & TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                </div>
                
                <div className="info-block">
                  <h3>ABOUT</h3>
                  <div className="block-content">
                    <p className="about-text">Passionate about creating beautiful,<br/>functional digital products with<br/>attention to detail and performance.</p>
                  </div>
                </div>
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