import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;