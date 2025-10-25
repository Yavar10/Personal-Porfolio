import './Footer.css';
import { motion } from 'framer-motion';
import ContactMe from '../ContactMe/Contact';

function Footer() {
  return (
   <div> <div className="footer-container">
      <motion.div initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }} className="footer-year">2025</motion.div>
      <div className="footer-text">© Mohd Yavar</div>
   
    </div>
       <ContactMe/>
    </div>
  );
}

export default Footer;