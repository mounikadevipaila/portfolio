import React from "react";
import "./Skills.css";
import { FaGoogle, FaCode, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const skillsData = [
  { name: "HTML", percentage: 90 },
  { name: "JavaScript", percentage: 60 },
  { name: "CSS", percentage: 85 },
  { name: "Git", percentage: 50 },
  { name: "Java", percentage: 65 },
  { name: "Node Js", percentage: 60 },
  { name: "React Js", percentage: 60 },
  { name: "React Native", percentage: 60 },
  { name: "DBMS", percentage: 60 },
  { name: "MySQL", percentage: 55 },
];

const codingProfiles = [
  { name: "Geeks for Geeks", icon: <FaGoogle />, count: "100+", link: "https://www.geeksforgeeks.org/user/mounikanohx/" },
  { name: "CodeChef", icon: <FaCode />, count: "300+", link: "https://www.codechef.com/users/mounikadevi83" },
  { name: "HackerRank", icon: <FaHackerrank />, count: "120+", link: "https://www.hackerrank.com/profile/mounikapyla83" },
  { name: "LeetCode", icon: <SiLeetcode />, count: "100+", link: "https://leetcode.com/u/mounikapyla83/" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>MY <span>SKILLS</span></h2>

      {/* Skills Section */}
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <svg className="progress-circle" viewBox="0 0 100 100">
              <circle className="bg" cx="50" cy="50" r="40"></circle>
              <circle
                className="progress"
                cx="50"
                cy="50"
                r="40"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * skill.percentage) / 100}
              ></circle>
              <text x="50" y="50" className="percentage" textAnchor="middle" dy="5">
                {skill.percentage}%
              </text>
            </svg>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* My Coding Profiles Section */}
      <h2 className="coding-heading">MY <span>CODING PROFILES</span></h2>
      
      <div className="coding-container">
        {/* Left Side: 2x2 Grid */}
        <div className="coding-boxes">
          {codingProfiles.map((profile, index) => (
            <a key={index} href={profile.link} target="_blank" rel="noopener noreferrer" className="coding-box">
              <div className="coding-logo-circle">{profile.icon}</div>
              <p className="coding-count">{profile.count} Problems</p>
            </a>
          ))}
        </div>

        {/* Right Side: Vertical List of Cards */}
        <div className="coding-cards">
          {codingProfiles.map((profile, index) => (
            <div key={index} className="coding-card">
              {/* Left Part */}
              <div className="coding-left">
                <h3>{profile.name}</h3>
                <a href={profile.link} target="_blank" rel="noopener noreferrer">
                  Go to my profile
                </a>
              </div>
              
              {/* Right Part */}
              <div className="coding-right">
                <div className="coding-icon-circle">{profile.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
