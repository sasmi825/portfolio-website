import React from "react";
import "./styles/styles.scss";  // ✅ Correct way
import styles from "./About.module.scss";
import profileImg from "../assets/profile.jpg"; // Replace with your actual image path

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Side - Text */}
        <div className={styles.textContainer}>
          <h1>Hey, I'm <span>Sasmi</span>.</h1>
          <p>
            A multidisciplinary developer and designer (sometimes) with a
            passion for creating engaging, user-friendly web experiences.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className={styles.imageContainer}>
          <img src={profileImg} alt="Sasmi Profile" />
        </div>
      </div>

      {/* My Approach Section */}
      <div className={styles.approachSection}>
        <h2>My Approach</h2>
        <div className={styles.approachContent}>
          <div>
            <h3>Collaborative</h3>
            <p>
              I believe in the power of collaboration to create exceptional
              websites. I immerse myself in your vision and goals to build a
              site that not only reflects your brand but exceeds expectations.
            </p>
          </div>
          <div>
            <h3>Iterative</h3>
            <p>
              I take an iterative approach to ensure the final result aligns
              with your creative vision. We refine and fine-tune every detail
              together.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Experience */}
      <div className={styles.educationExperience}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p><strong>Masters in Computer Science</strong> – George Washington University</p>
          <p><strong>Bachelors in Computer Science</strong> – JNTUA</p>
        </div>
        <div className={styles.experience}>
          <h3>3+ Years of Experience</h3>
          <p>Software Engineer | Full-stack Developer</p>
          <p><strong>Full-Stack Developer</strong> – Lapse</p>
          <p><strong>Software Engineer</strong> – EPAM Systems</p>
        </div>
      </div>
    </section>
  );
};

export default About;
