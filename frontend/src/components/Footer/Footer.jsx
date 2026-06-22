
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactMe from '../ContactMe/Contact';
import './Footer.css';

function Footer() {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "0px 0px -20% 0px", once: false });

  return (
    <div>
      <div className="footer-container" ref={ref}>
        
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="footer-year"
        >
          2026
        </motion.div>

        <div className="footer-text">© Mohd Yavar</div>
      </div>

      <ContactMe />
    </div>
  );
}

export default Footer;
