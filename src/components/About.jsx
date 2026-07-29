import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({threshold: 0.1});
  return (
    <section className="about">
        <div className="container">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : { }}
                transition={{ duration: 0.6 }}
            >
                <h2>About Me</h2>
                <p>
                    I am a passionate Full-Stack Developer with a strong foundation in both front-end and back-end technologies. I enjoy solving complex problems and building efficient, scalable applications. My goal is to continuously learn and grow as a developer while contributing to meaningful projects.
                </p>
                <div className="skills">
                    {
                        ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'].map((skill) => (
                            <span key={skill} className="skill">{skill}</span>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default About;