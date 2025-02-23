import React from "react";
import "./About.css";
import aboutImage from "./assets/thubprofile.jpg"; // Ensure correct path

const educationData = [
  {
    year: "2019 - 2020",
    title: "10th Grade",
    institution: "Sahithi EM School, Jaggampeta",
    description: "Completed my secondary education with a strong foundation in Science and Mathematics."
  },
  {
    year: "2020 - 2023",
    title: "Diploma in Computer Science",
    institution: "Aditya Polytechnic Colleges,Surampalem",
    description: "Gained knowledge in programming, database management, and networking."
  },
  {
    year: "2023 - Present",
    title: "BTech in Artificial Intelligece and Machine Learning",
    institution: "Aditya Engineering College,Surampalem",
    description: "Currently pursuing a degree in IT, focusing on full-stack development and data structures."
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Side - Content */}
        <div className="about-content">
          <h2>ABOUT <span>ME</span></h2>
          <p className="personal-info">
            I'm a Full Stack Developer based in India. I have a
            serious passion for UI effects, animations, and creating intuitive,
            user-friendly experiences.
          </p>
          <div className="info-grid">
            <div>
              <p><strong>First Name:</strong> Mounika Devi</p>
              <p><strong>Last Name:</strong> Paila</p>
              <p><strong>Nationality:</strong> Indian</p>
              <p><strong>Freelance:</strong> Available</p>
            </div>
            <div>
              <p><strong>Phone:</strong> +91 7893292249</p>
              <p><strong>Address:</strong> Jaggampeta, India</p>
              <p><strong>Email:</strong> mounikapyla83@gmail.com</p>
              <p><strong>Languages:</strong> English, Telugu</p>
            </div>
          </div>
          <div className="about-buttons">
            <button className="resume-btn"><a href="/MounikaFinalResume.pdf" target="_blank">View Resume</a></button>
           
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>EDUCATION</h2>
        <div className="education-container">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <span className="education-year">{edu.year}</span>
              <div className="education-content">
                <h3>{edu.title} - <span>{edu.institution}</span></h3>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
