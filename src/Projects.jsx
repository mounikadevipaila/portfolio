import React from "react";
import "./Projects.css";
import portfolio from "../src/assets/portfolio.png"
import bus from "../src/assets/bus.png"
import resume from "../src/assets/resume2.png"

const projects = [
  {
    title: "Portfolio Website",
    technologies: "HTML, CSS, JavaScript, ReactJs",
    description:
      "I had designed my own personal portfolio website. It is a dynamic and interactive web platform designed to highlight my technical skills, experience, and projects in an engaging and structured way.",
    gitLink: "https://portfolio-omega-khaki-38.vercel.app/",
    image: portfolio, // Add your image path here
  },
  {
    title: "FarmXpert",
    technologies: " React.js,Flask,Python,Gemini/OpenAI API,MongoDB.",
    description:
      "Developed a full-stack farming assistant with crop recommendation, weather-based pesticide advice, AI disease detection, fertilizer e-commerce,and a chatbot guide. ",
    gitLink: "https://github.com/mounikadevipaila/FarmXpert",
    image: bus, // Add your image path here
  },
  {
    title: "ATS Free Resume Builder",
    technologies: "HTML,CSS,Javascript ",
    description:
      "I had worked on a project called ATS-Free Resume Builder. It simplifies the process of creating ATS-compatible resumes with user-friendly templates and PDF download functionality.",
    gitLink: "https://mounikadevipaila.github.io/ResumeBuilder/home/homepage.html",
    image: resume, // Add your image path here
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>
        MY <span>PROJECTS</span>
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p>{project.description}</p>
             <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="git-button">
              View Site
            </a> 
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
