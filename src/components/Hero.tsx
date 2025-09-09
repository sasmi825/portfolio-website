import React from "react";
import "../styles/_hero.scss";
import profileimg from "../assets/profile.jpg"; // Correct way to import image

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hey, I’m Sasmi.</h1>
          
          <p className="hero-subtitle">
            I am a Full Stack Engineer who brings web applications to life, from intuitive user interfaces to robust, data-powered back ends.
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
