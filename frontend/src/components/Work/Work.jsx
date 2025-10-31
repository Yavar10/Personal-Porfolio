import React from 'react';
import './Work.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TiltedCard from '../ui/TiltedCard/TiltedCard';
import Particles from '../ui/Particles/Particles';
import { motion } from 'framer-motion';
import anonyChirp from '../../assets/anonyChirp.png';
import lavender from '../../assets/lavender.png';
import netflix from '../../assets/netflix.png';
import Notehousery from '../../assets/Notehousery.png';

const Work = () => {
    const projects = [
        { 
            id: 1, 
            title: "AnonyChirp", 
            image: anonyChirp, 
            github: "https://github.com/Yavar10/Anonymous-Messages-Dashboard-User-Version", 
            demo: "https://anonymous-messages-dashboard-user-v.vercel.app/" 
        },
        { 
            id: 2, 
            title: "Lavender", 
            image: lavender, 
            github: "https://github.com/Yavar10/Lavender-ChatBot", 
            demo: "https://lavender-ashy.vercel.app/" 
        },
        { 
            id: 3, 
            title: "Netflix Clone", 
            image: netflix, 
            github: "https://github.com/Yavar10/Netflix", 
            demo: "https://netflix-zeta-sage.vercel.app/" 
        },
        { 
            id: 4, 
            title: "Notehousery", 
            image: Notehousery, 
            github: "https://github.com/Yavar10/Stuff-i-made-leaning-react", 
            demo: "https://stuff-i-made-leaning-react.vercel.app" 
        },
    ];

 
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

/*     const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: -50 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }; */

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="work-section" id="work">
         
            <div className="work-background">
                <Particles
                    particleColors={['#ffffff', '#cccccc']}
                    particleCount={600}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={150}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

      
            <div className="work-content">
                <motion.header 
                    className="work-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <div className="work-title">
                        <motion.div 
                            className="work-title-part"
                            initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
                        >
                            Wo
                        </motion.div>
                        <motion.div 
                            className="work-title-part"
                          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
                        >
                            rk
                        </motion.div>
                    </div>
                </motion.header>

                <motion.div 
                    className="work-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {projects.map((project) => (
                        <motion.div 
                            className="work-card" 
                            key={project.id}
                            variants={cardVariants}
                        >
                            <TiltedCard
                                imageSrc={project.image}
                                altText={project.title}
                                captionText={project.title}
                                containerHeight="400px"
                                containerWidth="600px"
                                imageHeight="300px"
                                imageWidth="100%"
                                rotateAmplitude={8}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="project-overlay">
                                        <div style={{padding:"15px 0 0 15px", display:"flex",flexDirection:"column",gap:"0.25rem"}}>
                                        <div className="project-name">{project.title}</div>
                                        <div className="project-links">
                                            <a 
                                                href={project.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="project-link"
                                                aria-label={`View ${project.title} demo`}
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="project-link"
                                                aria-label={`View ${project.title} on GitHub`}
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                }
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Work;