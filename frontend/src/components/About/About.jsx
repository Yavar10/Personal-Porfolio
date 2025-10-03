import React from 'react'
import { motion } from 'framer-motion'
import tick from '../../assets/tick.svg'
import './About.css'

const About = () => {
  return (
    <div>
      <div className='rightcont'>
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          whileInView={{ opacity: 1, x: 10 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true, amount: 0.3 }}
          className="titleAbout"
        >
          About
        </motion.div>

        <motion.span 
          initial={{ opacity: 0, x: 10 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true, amount: 0.3 }}
          className="overlaptxtup"
        >
          Creative Vision
        </motion.span>

        <motion.span 
          initial={{ opacity: 0, x: 10 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true, amount: 0.3 }}
          className="overlaptxtdn"
        >
          01
        </motion.span>
      </div>

      <div className="content-container-about">

        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          whileInView={{ opacity: 1, x: 10 }} 
          transition={{ delay: 0.2, duration: 1 }} 
          viewport={{ once: true, amount: 0.2 }}
          className="content-container-about-left"
        >
          <motion.span 
            initial={{ opacity: 0, x: -10 }} 
            whileInView={{ opacity: 1, x: 10 }} 
            transition={{ delay: 0.5, duration: 1 }} 
            viewport={{ once: true }}
          >
            Hi, I’m Yavar, a developer who enjoys turning ideas into practical applications. I’m pursuing my B.Tech in IT and exploring how technology solves real problems.
          </motion.span>
          <br /><br />
          <motion.span 
            initial={{ opacity: 0, x: -10 }} 
            whileInView={{ opacity: 1, x: 10 }} 
            transition={{ delay: 0.7, duration: 1 }} 
            viewport={{ once: true }}
          >
            I work with JavaScript, Node.js, Express, and MongoDB, building APIs and backend systems while improving my problem-solving through coding platforms.
          </motion.span>
          <br /><br />
          <motion.span 
            initial={{ opacity: 0, x: -10 }} 
            whileInView={{ opacity: 1, x: 10 }} 
            transition={{ delay: 1, duration: 1 }} 
            viewport={{ once: true }}
          >
            Always learning and experimenting, I enjoy reading, writing, and exploring new ideas beyond code.
          </motion.span>
        </motion.div> 

        <motion.div 
          initial={{ opacity: 0, x: 10 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true, amount: 0.2 }}
          className="content-container-about-right"
        >
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2, duration: 1 }} 
            viewport={{ once: true }}
          >  
            Transforming ideas into compelling visual narratives that resonate with audiences.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 1 }} 
            viewport={{ once: true }}
            className='things-about'
          >
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.7, duration: 1 }} 
              viewport={{ once: true }}
              className='col-things-about'
            >
              <span>Design</span>
              <img style={{ height: "30px" }} src={tick} alt="" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.9, duration: 1 }} 
              viewport={{ once: true }}
              className='col-things-about'
            >
              <span>Development</span>
              <img style={{ height: "30px" }} src={tick} alt="" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ delay: 1.1, duration: 1 }} 
              viewport={{ once: true }}
              className='col-things-about'
            >
              <span>Strategy</span>
              <img style={{ height: "30px" }} src={tick} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default About
