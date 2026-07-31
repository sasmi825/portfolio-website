import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="projects-footer">
          <Link to="/projects" className="view-all-link">
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
