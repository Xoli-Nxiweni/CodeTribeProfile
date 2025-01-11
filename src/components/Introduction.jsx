// components/Introduction.js
import React from 'react';
import './styles/Introduction.css'
import image from '../assets/000.png'

const Introduction = () => {
  const personalInfo = {
    name: "Xolile Nxiweni",
    location: "Soweto, South Africa",
    program: "CodeTribe Academy",
    introduction:
      "A passionate developer who joined CodeTribe Academy to enhance my skills in web and mobile development. Prior to CodeTribe, I worked on several personal projects and completed online courses in web development. My goal is to become a full-stack developer and contribute to meaningful projects that make a difference.",
    avatar: image,
  };

  return (
    <section id="intro">
      <div className="intro-container">
        <img src={personalInfo.avatar} alt="Profile" className="avatar" />
        <div className="intro-content">
          <h1>{personalInfo.name}</h1>
          <p>{personalInfo.location}</p>
          <p>{personalInfo.program}</p>
          <p>{personalInfo.introduction}</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;