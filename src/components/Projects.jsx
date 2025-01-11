import React, { useState } from "react";
import "./styles/Projects.css";

const Projects = ({ data }) => {
  const [activeTab, setActiveTab] = useState("individual");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "individual" ? "active" : ""}`}
            onClick={() => setActiveTab("individual")}
          >
            Individual
          </button>
          <button
            className={`tab-button ${activeTab === "group" ? "active" : ""}`}
            onClick={() => setActiveTab("group")}
          >
            Group
          </button>
        </div>
        <div className="projects-list">
          {(activeTab === "individual" ? data.individual : data.group).map(
            (project, index) => (
              <div
                key={index}
                className="project-item"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            )
          )}
        </div>
      </div>

      {selectedProject && (
        <div className="project-dialog">
          <div className="dialog-content">
            <button
              className="close-button"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h3>{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="dialog-image"
            />
            <p>{selectedProject.description}</p>
            <ul className="project-features">
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="dialog-button"
              onClick={() => window.open(selectedProject.github, "_blank")}
            >
              GitHub
            </button>
            <button
              className="dialog-button"
              onClick={() => window.open(selectedProject.demo, "_blank")}
            >
              Live Demo
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
