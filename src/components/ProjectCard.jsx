const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((t) => <span key={t}>{t}</span>)}
      </div>
      <div className="project-links">
        <a href={project.liveUrl} target="_blank">Live</a>
        <a href={project.githubUrl} target="_blank">Code</a>
      </div>
    </div>
  );
};
export default ProjectCard;