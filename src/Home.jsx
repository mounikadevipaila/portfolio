import React, { useState } from "react";
import "./Home.css";
import profileImage from "./assets/thubprofile.jpg"; 

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">My Portfolio</div>
        
        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navbar Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#internships" onClick={toggleMenu}>Internships</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="home-content">
        <div className="image-section">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="text-section">
          <h2>Hello, I'm</h2>
          <h1><span className="highlight">Paila Mounika Devi</span></h1>
          <p>
            Currently I am pursuing B.Tech Third year in Artificial Intelligence and Machine Learning. I am an enthusiastic
            person to participate in competitions, take up new challenges, and a quick learner. Results-driven Full-Stack
            Developer skilled in HTML, CSS, JavaScript, React, and backend technologies like Node.js and MongoDB.
            Passionate about building user-friendly web applications and optimizing performance. Eager to contribute
            technical expertise to dynamic teams.
          </p>
          <button className="btn" onClick={scrollToAbout}>About me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
