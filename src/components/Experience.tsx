// src/components/Experience.tsx
import React from "react";
import "../styles/_experience.scss"; // Ensure you have the styles

const Experience: React.FC = () => {
  return (
    <section className="experience">
      <div className="education">
        <h2>Education</h2>
        <p><strong>Masters in Computer Science</strong> <br /> <i> - George Washington University</i></p>
        <p><strong>Bachelors in Computer Science And Engineering</strong> <br /> <i> - Narayana Engineering College, JNTUA </i></p>
      </div>

      <div className="work-experience">
        <h2>3+ Years of Experience</h2>
        <p><strong>Software Engineer | Full-stack Developer</strong></p>
        <p><strong>Software Engineer</strong> <i> – Democracy Labs</i> </p>
        <p><strong>Full Stack Engineer</strong> <i> – Lapse</i> </p>
        <p><strong>Software Engineer</strong> <i>– EPAM Systems</i></p>
      </div>
    </section>
  );
};

export default Experience;
