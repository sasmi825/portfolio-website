import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
