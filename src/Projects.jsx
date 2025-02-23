import React from "react";
import "./Projects.css";
import portfolio from "../src/assets/portfolio.png"
import bus from "../src/assets/bus.png"
import resume from "../src/assets/resume2.png"

const projects = [
  {
    title: "Portfolio Website",
    technologies: "HTML, CSS, JavaScript, React",
    description:
      "I had designed my own personal portfolio website. It is a dynamic and interactive web platform designed to highlight my technical skills, experience, and projects in an engaging and structured way.",
    gitLink: "https://github.com/yourusername/portfolio",
    image: portfolio, // Add your image path here
  },
  {
    title: "Bus In/Out Service",
    technologies: "React, Node.js, Express, MongoDB",
    description:
      "I had worked on a Live Project named Bus In/Out Service. It is a full-stack web application designed to efficiently manage and track college bus transportation with real-time data visualization.",
    gitLink: "https://github.com/yourusername/bus-in-out",
    image: bus, // Add your image path here
  },
  {
    title: "ATS Free Resume Builder",
    technologies: "React, Redux, Firebase",
    description:
      "I had worked on a project called ATS-Free Resume Builder. It simplifies the process of creating ATS-compatible resumes with user-friendly templates and PDF download functionality.",
    gitLink: "https://github.com/mounikadevipaila/ResumeBuilder",
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
            {/* <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="git-button">
              GitHub Link
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
