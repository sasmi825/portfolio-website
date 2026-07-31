import React from "react";

const techCategories = [
  {
    name: "Programming & Web",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    name: "Data & Analytics",
    items: [
      "SQL",
      "Spark",
      "Kafka",
      "Hadoop",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redshift",
      "Snowflake",
      "BigQuery",
      "Cassandra",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Git"],
  },
  {
    name: "Tools & Other",
    items: ["Figma", "Jira", "WCAG", "ADA"],
  },
];

const Technologies: React.FC = () => {
  return (
    <section className="technologies">
      <h2 className="section-title">Technologies</h2>
      <div className="tech-grid">
        {techCategories.map((category) => (
          <div className="tech-category" key={category.name}>
            <h3>{category.name}</h3>
            <div className="tech-pills">
              {category.items.map((item) => (
                <span className="tech-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
