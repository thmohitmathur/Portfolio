import { motion } from 'framer-motion';
import portrait from '../assets/portrait.png';

const ease = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          Mohit Mathur
        </motion.h1>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
        >
          Full-Stack Developer
        </motion.p>

        <div className="hero-grid">
          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
          >
            <img
              src={portrait}
              alt="Portrait of Mohit Kumar Mathur"
              loading="eager"
            />
          </motion.div>

          <motion.div
            className="hero-side"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            <p className="hero-specialties">
              Web Applications <span>/</span> Interactive Interfaces
              <br />
              REST &amp; APIs <span>/</span> Databases
              <br />
              Problem Solving
            </p>

            <a href="#contact" className="link-underline">
              Work with Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
