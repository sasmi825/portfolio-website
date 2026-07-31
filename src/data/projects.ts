import samsKitchen from "../assets/projects/sams-kitchen.png";
import bloosAdventure from "../assets/projects/bloos-adventure.png";
import studentAssist from "../assets/projects/student-assist.png";
import nlpEmotion from "../assets/projects/nlp-emotion.png";
import stockEtl from "../assets/projects/stock-etl.png";
import awsDe from "../assets/projects/aws-de.png";

export interface Project {
  title: string;
  tag: string;
  description: string;
  link: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Stock Indicators ETL",
    tag: "Data Engineering",
    description:
      "This project pulls 1-minute stock data from Yahoo Finance and generates momentum indicators using TA-Lib. An Airflow DAG orchestrates two tasks—Downloader and Indicators—running every weekday at 9:30 AM to process the previous day’s stock data efficiently.",
    link: "https://github.com/sasmi825/stock-indicators-etl",
    image: stockEtl,
    featured: true,
  },
  {
    title: "AWS Data Engineering",
    tag: "Cloud · AWS",
    description:
      "A collection of hands-on projects from the Udacity Data Engineering with AWS Nanodegree, showcasing skills in data modeling, cloud data warehousing, Spark, data lake strategies, and automated pipelines. Each project demonstrates practical application of modern data engineering techniques.",
    link: "https://github.com/sasmi825/Data_Engineering_AWS_Projects",
    image: awsDe,
    featured: true,
  },
  {
    title: "Student Assist App",
    tag: "AI · RAG",
    description:
      "Student Assist provides a platform for students to upload, organize, and access educational materials like PDFs and lecture notes. It also converts audio clips to text, generates summaries, and enables quick retrieval of content based on user queries.",
    link: "https://github.com/sasmi825/student-assist-application",
    image: studentAssist,
    featured: true,
  },
  {
    title: "Sam’s Kitchen",
    tag: "Full Stack",
    description:
      "Concept and creation of Sam’s Kitchen website, highlighting its diverse menu, commitment to fresh ingredients, and warm dining experience, along with a seamless online ordering service for pickup.",
    link: "https://github.com/anchal-04/SAM-s-Kitchen",
    image: samsKitchen,
  },
  {
    title: "Bloo’s Adventure",
    tag: "Game · Web",
    description:
      "Bloo’s Adventure comes to life through a thoughtfully designed website, blending captivating storytelling, interactive features, and a seamless experience to explore and enjoy.",
    link: "https://github.com/sasmi825/csci6562final",
    image: bloosAdventure,
  },
  {
    title: "NLP Emotion Detection",
    tag: "NLP · ML",
    description:
      "This project studies the impact of textual representations (Bag-of-Words, TF-IDF, BERT embeddings) and training approaches (from-scratch vs. fine-tuning) on multi-class text classification. It evaluates classical ML models and transformer-based models (RoBERTa, T5) to find the most effective framework for accurate text classification.",
    link: "https://github.com/sasmi825/csci-6364-nlp-project",
    image: nlpEmotion,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export default projects;
