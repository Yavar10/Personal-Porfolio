import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import anonyChirp from '../../assets/anonyChirp.png';
import lavender from '../../assets/lavender.png';
import netflix from '../../assets/netflix.png';
import Notehousery from '../../assets/Notehousery.png';

const Work = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const projects = [
        {
            id: 1,
            title: "AnonyChirp",
            image: anonyChirp,
            description: "Anonymous Twitter-like social platform",
            github: "https://github.com/Yavar10/Anonymous-Messages-Dashboard-User-Version",
            demo: "https://anonymous-messages-dashboard-user-v.vercel.app/",
        },
        {
            id: 2,
            title: "Lavender",
            image: lavender,
            description: "Lavender Chatbot using Gemini API",
            github: "https://github.com/Yavar10/Lavender-ChatBot",
            demo: "https://lavender-ashy.vercel.app/",
        },
        {
            id: 3,
            title: "Netflix Clone",
            image: netflix,
            description: "Netflix clone with modern features",
            github: "https://github.com/Yavar10/Netflix",
            demo: "https://netflix-zeta-sage.vercel.app/",
        },
        {
            id: 4,
            title: "Notehousery",
            image: Notehousery,
            description: "Note-taking application",
            github: "https://github.com/Yavar10/Stuff-i-made-leaning-react",
            demo: "https://stuff-i-made-leaning-react.vercel.app",
        },
    ];

    return (
        <section className="work" id="work">
         <div className='headWork'>
          <motion.div
          className="titleWork"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Wo
        </motion.div>
          <motion.div
          className="titleWork"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          rk
        </motion.div>
        </div> 
            <div className="work__container">
                {projects.map((project) => (
                    <motion.div initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                             className="work__card" key={project.id}>
                        <div 
                            className="work__img-wrapper"
                            onMouseEnter={() => setHoveredImage(project.image)}
                            onMouseLeave={() => setHoveredImage(null)}
                            onMouseMove={handleMouseMove}
                        >
                            <img src={project.image} alt={project.title} className="work__img" />
                        </div>
                        <h3 className="work__name">{project.title}</h3>
                        <p className="work__description">{project.description}</p>
                        <div className="work__links">
                            <motion.a
                                initial={{ scale: 1 ,color: "black" }}
                                whileTap={{ scale: 1.5 }}
                                whileHover={{ scale: 1.2}}
                                transition={{ duration: 0.5 }}
                            href={project.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="work__icon" />
                            </motion.a>
                            <motion.a 
                              initial={{ scale: 1 ,color: "black" }}
                                whileTap={{ scale: 1.5 }}
                                whileHover={{ scale: 1.2}}
                                transition={{ duration: 0.5 }} href={project.demo} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt className="work__icon" />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {hoveredImage && (
                    <motion.div 
                        className="work__img-preview"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            left: `${mousePosition.x + 20}px`,
                            top: `${mousePosition.y + 20}px`,
                        }}
                    >
                        <img src={hoveredImage} alt="Preview" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Work;