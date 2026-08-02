import React from "react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  /** Truncate the description to three lines so cards in a row stay even. */
  clamp?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, clamp = true }) => (
  <article className="project-card">
    <img
      src={project.image}
      alt={project.title}
      className="card-img"
      loading="lazy"
    />
    <div className="card-body">
      <span className="card-tag">{project.tag}</span>
      <h3 className="card-title">{project.title}</h3>
      <p className={clamp ? "card-desc is-clamped" : "card-desc"}>
        {project.description}
      </p>
      <div className="card-links">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          {project.linkLabel ?? "View Project"}
          <span className="card-link-arrow" aria-hidden="true">
            →
          </span>
        </a>
        {project.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link is-secondary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </article>
);

export default ProjectCard;
