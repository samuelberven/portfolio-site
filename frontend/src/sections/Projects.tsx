import React from "react";
import { projects } from "../utils/data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description.join(". ")}</p>
          <p>Categories: {project.categories.join(", ")}</p>
          <p>Technologies: {project.stack.join(", ")}</p>
          {project.github_url && <a href={project.github_url}>View Repo</a>}
          {project.deploy_url && <a href={project.deploy_url}>Live Deploy</a>}
        </div>
      ))}
    </section>
  );
};

export default Projects;
