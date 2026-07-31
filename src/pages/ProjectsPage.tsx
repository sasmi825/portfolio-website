import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <div className="projects-page">
        <div className="container">
          <header className="page-header">
            <h1>Projects</h1>
            <p>
              A mix of full stack builds, data pipelines, and machine learning
              work — from restaurant ordering flows to Airflow DAGs.
            </p>
          </header>
          <main className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} clamp={false} />
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
