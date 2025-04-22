import React from "react";
import "../styles/_technologies.scss";

const Technologies: React.FC = () => {
  return (
    <section className="technologies">
      <h2 className="tech-title">Technologies</h2>
      <div className="tech-list">
        <p>JavaScript, TypeScript, React, Node, MongoDB, RestAPIs, Git</p>
        <hr />
        <p>Python, HTML5, CSS3, SCSS, Redux, Angular, SASS, JQuery</p>
        <hr />
        <p>MySQL, PL/SQL, Figma, Accessibility, WCAG, ADA, Jira, Azure</p>
      </div>
    </section>
  );
};

export default Technologies;
