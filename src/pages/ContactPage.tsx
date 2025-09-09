// src/components/ContactPage.tsx

import React from "react";
import "../styles/_contactpage.scss";
import Footer from "../components/Footer";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page-wrapper">
      <main className="main-content">
        {/* All your sections go here */}
        <section className="hero-section">
          <div className="hero-text-content">
            <h1>Developer & Designer</h1>
            <p>
              Blending creativity with technical expertise, Sasmi is passionate about building end-to-end web experiences, from intuitive front-ends to scalable, data-driven back-ends. 
              She loves crafting resilient systems that power dynamic interfaces, making the digital world more accessible and efficient.
              When she's not coding, she enjoys spending time with her pets, exploring new technologies, and finding inspiration in everyday moments.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src={picture1}
              alt="Developer working with city skyline in background"
              className="hero-image"
            />
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-image-wrapper">
            <img
              src={picture2}
              alt="Person in a desert landscape"
              className="contact-image"
            />
          </div>
          <div className="contact-text-content">
            <p>
              Say hey to Sas at{" "}
              <a href="mailto:sasmipolu@gmail.com" className="email-link">
                sasmipolu@gmail.com
              </a>{" "}
              or view her <span className="strikethrough-text">boring details</span> full work experience on{" "}
              <a
                href="https://www.linkedin.com/in/sasmipolu"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </section>
      </main>
          <svg className="wave-divider" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path
            fill="#C6C3CD"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,122.7C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      <Footer />
    </div>
  );
};

export default ContactPage;