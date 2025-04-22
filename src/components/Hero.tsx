import React from "react";
import "../styles/_hero.scss";
import profileimg from "../assets/profile.jpeg"; // Correct way to import image

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hey, I’m Sasmi.</h1>
          <p className="hero-subtitle">
            A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, user-friendly web experiences.
          </p>
        </div>
        <div className="hero-image">
          <img src={profileimg} alt="Sasmi" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
