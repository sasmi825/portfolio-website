import React from "react";

interface Credential {
  title: string;
  year: string;
  org: string;
}

const education: Credential[] = [
  {
    title: "Masters in Computer Science",
    year: "2023 – 2025",
    org: "George Washington University",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    year: "2017 – 2021",
    org: "Narayana Engineering College, JNTUA",
  },
];

const experience: Credential[] = [
  {
    title: "Software Engineer",
    year: "2025 – 2026",
    org: "DemocracyLab",
  },
  {
    title: "Full Stack Developer",
    year: "2024",
    org: "Lapse",
  },
  {
    title: "Software Engineer",
    year: "2021 – 2023",
    org: "EPAM Systems",
  },
];

const CredentialList: React.FC<{ heading: string; items: Credential[] }> = ({
  heading,
  items,
}) => (
  <div className="cred-section">
    <h2 className="cred-heading">{heading}</h2>
    {items.map((item) => (
      <div className="cred-item" key={`${item.title}-${item.org}`}>
        <div className="cred-row">
          <span className="cred-title">{item.title}</span>
          <span className="cred-year">{item.year}</span>
        </div>
        <div className="cred-org">{item.org}</div>
      </div>
    ))}
  </div>
);

const Experience: React.FC = () => {
  return (
    <section className="credentials" id="about">
      <div className="container">
        <CredentialList heading="Education" items={education} />
        <CredentialList heading="3+ Years of Experience" items={experience} />
      </div>
    </section>
  );
};

export default Experience;
