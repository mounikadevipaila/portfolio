import React from "react";
import "./Internships.css";
import { FaBriefcase } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";
import ciscoLogo from "./assets/cisco.png"; // Replace with actual Cisco logo
import internshalaLogo from "./assets/internshala3.jpg"; // Replace with actual HackerRank logo
import itLogo from "./assets/itspec.png"; // Replace with actual AWS logo
import infoLogo from "./assets/infosys2.jpg"
import hack from "./assets/hack2.jpg"; // Replace with actual Oracle logo
import { FaLaptopCode } from "react-icons/fa";

const internships = [
  {
    id: 1,
    domain: "Web Technologies",
    description: "During my Web Technologies Internship, I worked on developing responsive and interactive web applications using modern front-end and back-end technologies. The internship provided hands-on experience in HTML, CSS, JavaScript, React, and Node.js, along with exposure to best practices in web development.",
    period: "June 2023 - Aug 2023",
    certificateLink: "/diploma_training_certificate.pdf",
  },
  {
    id: 2,
    domain: "Web Development",
    description: "During my Web Development Internship, I gained hands-on experience in designing and developing modern web applications with a strong focus on front-end and back-end technologies. I worked on real-world projects, improving my skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    period: "July 2023 - Sept 2023",
    certificateLink: "/codsoft_internship_certificate.pdf",
  },
  {
    id: 3,
    domain: "FSD With React Native",
    description: "During my Full Stack Development (FSD) Internship with React Native, I gained practical experience in building cross-platform mobile applications using React Native, along with backend integration using Node.js and Express.js.",
    period: "Aug 2023 - Oct 2023",
    certificateLink: "/Summer_internship_certificate.pdf",
  },
];

const certifications = [
  {
    id: 1,
    title: "Cisco Introduction to cyber security",
    logo: ciscoLogo,
    certificateLink: "/cybersecurity_cisco.pdf",
  },
  {
    id: 2,
    title: "Internshala on Web Development",
    logo: internshalaLogo,
    certificateLink: "/internshala certificate.pdf",
  },
  {
    id: 3,
    title: "Cisco Introduction to Networks",
    logo: ciscoLogo,
    certificateLink: "introtonetworks_cisco.pdf",
  },
  {
    id: 4,
    title: "It Specialist Certification on HTML and CSS",
    logo: itLogo,
    certificateLink: "itspecialist.pdf",
  },
  {
    id: 5,
    title: "Java 11 essentials in Infosys Springboard",
    logo: infoLogo,
    certificateLink: "java_infosysspringboard.pdf",
  },
  {
    id: 6,
    title: "Javascript Basic on Hackerrank",
    logo: hack,
    certificateLink: "javascript_basic certificate (1).pdf",
  },
];

const Internships = () => {
  return (
    <section id="internships" className="internships-section">
      <h2>MY <span>INTERNSHIPS</span></h2>
      <div className="internship-cards">
        {internships.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <div className="internship-icon"><FaLaptopCode /></div>
            <h3>{internship.domain}</h3>
            <p>{internship.description}</p>
            <p><strong>Duration:</strong> {internship.period}</p>
            <a href={internship.certificateLink} 
   className="cert-btn internship-btn" 
   target="_blank" 
   rel="noopener noreferrer">
   View Internship Certificate
</a>
          </div>
        ))}
      </div>

      <br /><br />

      {/* Certifications Section */}
      <h2>MY <span>CERTIFICATIONS</span></h2>
      <div className="certification-cards">
        {certifications.map((cert) => (
          <div className="certification-card" key={cert.id}>
            <div className="cert-logo">
              <img src={cert.logo} alt={cert.title} />
            </div>
            <h3>{cert.title}</h3>
            <a href={cert.certificateLink} className="cert-btn" target="_blank">
              <FaCertificate /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
