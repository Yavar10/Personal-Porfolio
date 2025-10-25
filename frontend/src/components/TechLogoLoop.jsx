// TechLogoLoop.jsx
import React from 'react';
import LogoLoop from '../components/ui/LogoLoop/LogoLoop.jsx';
import { SiReact, SiNextdotjs, SiJavascript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function TechLogoLoop() {
  return (
    <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default TechLogoLoop;
