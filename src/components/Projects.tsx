import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/_projects.scss";

const projects = [
  {
    title: "Sam’s Kitchen ",
    subtitle:"Restaurant",
    description:
      "Concept and creation of Sam’s Kitchen website, highlighting its diverse menu, commitment to fresh ingredients, and warm dining experience, along with a seamless online ordering service for pickup.",
    link: "#",
  },
  {
    title: "Bloo’s Adventure ",
    subtitle:"2D Platformer",
    description:
      "Bloo’s Adventure comes to life through a thoughtfully designed website, blending captivating storytelling, interactive features, and a seamless experience to explore and enjoy.",
    link: "#",
  },
  {
    title: "TaskEase ",
    subtitle:"Task Management",
    description:
      "Design and development of TaskEase, a dynamic platform built to simplify task management with seamless organization, smart automation, and an effortless user experience.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 slides for tablets
            1024: { slidesPerView: 3 }, // 3 slides for desktops
          }}
          className="projects-carousel"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <h3>{project.subtitle}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
