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
    link: "https://github.com/anchal-04/SAM-s-Kitchen",
  },
  {
    title: "Bloo’s Adventure ",
    subtitle:"2D Platformer",
    description:
      "Bloo’s Adventure comes to life through a thoughtfully designed website, blending captivating storytelling, interactive features, and a seamless experience to explore and enjoy.",
    link: "https://github.com/sasmi825/csci6562final",
  },
  {
    title: "Student Assist App",
    subtitle:"EduAssist",
    description:
      "Student Assist provides a platform for students to upload, organize, and access educational materials like PDFs and lecture notes. It also converts audio clips to text, generates summaries, and enables quick retrieval of content based on user queries.",
    link: "https://github.com/sasmi825/student-assist-application",
  },
  {
    title: "NLP Emotion Detection",
    subtitle:"Emotion Classification Insights",
    description:
      "This project studies the impact of textual representations (Bag-of-Words, TF-IDF, BERT embeddings) and training approaches (from-scratch vs. fine-tuning) on multi-class text classification. It evaluates classical ML models and transformer-based models (RoBERTa, T5) to find the most effective framework for accurate text classification.",
    link: "https://github.com/sasmi825/csci-6364-nlp-project"
  },
  {
    title: "Stock Indicators ETL",
    subtitle:"Stock Momentum Pipeline",
    description:
      "This project pulls 1-minute stock data from Yahoo Finance and generates momentum indicators using TA-Lib. An Airflow DAG orchestrates two tasks—Downloader and Indicators—running every weekday at 9:30 AM to process the previous day’s stock data efficiently.",
    link: "https://github.com/sasmi825/stock-indicators-etl"
  },
  {
    title: "AWS Data Engineering Projects",
    subtitle:"Cloud Data Pipelines",
    description:
      "A collection of hands-on projects from the Udacity Data Engineering with AWS Nanodegree, showcasing skills in data modeling, cloud data warehousing, Spark, data lake strategies, and automated pipelines. Each project demonstrates practical application of modern data engineering techniques.",
    link: "https://github.com/sasmi825/Data_Engineering_AWS_Projects"
  }
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
          // The new prop is added here
          centeredSlides={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-carousel"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <span className="subtitle">{project.subtitle}</span>
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