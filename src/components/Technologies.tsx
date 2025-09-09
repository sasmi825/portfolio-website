import React from "react";
import "../styles/_technologies.scss";

const Technologies: React.FC = () => {
  return (
    <section className="technologies">
      <h2 className="tech-title">Technologies</h2>
      <div className="tech-list">
        <p><b><i>Programming & Web:</i></b> Python, JavaScript, TypeScript, React, Angular, Node, and REST APIs.</p>
        <hr />
        <p><b><i>Data & Analytics:</i></b> Python, SQL, Spark, Kafka, Hadoop, PyTorch, TensorFlow, PostgreSQL, MySQL, MongoDB, NoSQL, BigQuery, Apache Cassandra, Snowflake, Oracle, Redshift</p>
        <hr />
        <p><b><i>Cloud & DevOps:</i></b> Azure, AWS, GCP, Kubernetes, Docker, and Git.</p>
        <hr />
        <p><b><i>Tools & Other:</i></b> Figma, Jira, and expertise in Accessibility (WCAG, ADA).</p>
      </div>
    </section>
  );
};

export default Technologies;
