import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ease = [0.16, 1, 0.3, 1];

const doItems = [
  {
    index: '01',
    title: 'Frontend Engineering',
    copy: 'I build fast, accessible interfaces with React — turning ideas into polished, responsive experiences.',
  },
  {
    index: '02',
    title: 'Backend & APIs',
    copy: 'I design reliable server logic and REST APIs with Node.js, Express and MongoDB that scale cleanly.',
  },
  {
    index: '03',
    title: 'Problem Solving',
    copy: 'I enjoy breaking down complex problems into efficient, maintainable solutions end to end.',
  },
];

const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Git'];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.span>

        <motion.h2
          className="display-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          What I Do
        </motion.h2>

        <motion.p
          className="about-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          I&apos;m a passionate full-stack developer with a strong foundation across the
          stack. <em>I love building efficient, scalable applications</em> and continuously
          learning while contributing to meaningful projects.
        </motion.p>

        <div className="do-grid">
          {doItems.map((item, i) => (
            <motion.div
              key={item.index}
              className="do-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
            >
              <span className="do-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {skills.map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
