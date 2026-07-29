const ProjectCard = ({ project, index }) => {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>

      <div className="project-head">
        <h3>{project.title}</h3>
        <span className="project-year">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Live
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
