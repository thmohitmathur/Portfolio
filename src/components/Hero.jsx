import {motion} from 'framer-motion';
const Hero = () => {
  return (
    <section className="hero">
        <div className="container hero-content">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Hi, I'am <span>Mohit Kumar Mathur</span></h1>
                <p className="subtitle">Full-Stack Developer | Problem Solver</p>
                          <div className="cta-buttons">
                            <a href="#projects" className="btn primary">View My Work</a>
                            <a href="#contact" className="btn secondary">Hire Me</a>
                        </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;