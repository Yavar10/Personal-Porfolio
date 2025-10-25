"use client"

import tick from '../../assets/tick.svg'
import flower from '../../assets/floral.png'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='rightcont'>
        <motion.div 
          className="titleAbout"
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.div>
        <div id='about'></div>

        <motion.span 
          className="overlaptxtup"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Creative Vision
        </motion.span>

        <motion.span 
          className="overlaptxtdn"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          01
        </motion.span>
      </div>

      <br />
      <br />

      <div  className="content-container-about">
        <motion.div 
          className="content-container-about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>
            Hi, I’m Yavar, a developer who enjoys turning ideas into practical applications. I’m pursuing my B.Tech in IT and exploring how technology solves real problems.
          </span>
          <br /><br />
          <span>
           I work with JavaScript, Node.js, Express, and MongoDB, and build interfaces using React, Tailwind CSS, and Framer Motion for smooth, engaging user experiences. I also keep sharpening my problem-solving on coding platforms.</span>
          <br /><br />
          <span>
            Always learning and experimenting, I enjoy reading, writing, and exploring new ideas beyond code.
          </span>
        </motion.div> 

        <motion.div 
          className="content-container-about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            Transforming ideas into compelling visual narratives that resonate with audiences.
          </div>

          <div className='things-about'>
            {['Design', 'Development', 'Strategy'].map((item, index) => (
              <motion.div 
                key={item} 
                className='col-things-about'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span>{item}</span>
                <img style={{ height: "30px" }} src={tick} alt="" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className='image-flower'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img style={{ height:"250px", position:"absolute", right:"0px" }} src={flower} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
