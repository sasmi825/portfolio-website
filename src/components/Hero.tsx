import React from "react";
import { Link } from "react-router-dom";
import profileimg from "../assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hey, I’m Sasmi.</h1>
          <p className="hero-subtitle">
            I am a Full Stack Engineer who brings web applications to life, from
            intuitive user interfaces to robust, data-powered back ends.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              View My Work
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileimg} alt="Sasmi Polu" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
