import React, { useState } from "react";
import "./styles/Projects.css";

const Projects = ({ data }) => {
  const [activeTab, setActiveTab] = useState("individual");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLinkClick = (url, type) => {
    if (!url) {
      alert(`No ${type} link available for this project`);
      return;
    }
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "individual" ? "active" : ""}`}
            onClick={() => setActiveTab("individual")}
            aria-pressed={activeTab === "individual"}
          >
            Individual
          </button>
          <button
            className={`tab-button ${activeTab === "group" ? "active" : ""}`}
            onClick={() => setActiveTab("group")}
            aria-pressed={activeTab === "group"}
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
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
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
        <div className="project-dialog" role="dialog" aria-modal="true">
          <div className="dialog-content">
            <button
              className="close-button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
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
            
            <div className="tech-stack">
              <h4>Tech Stack</h4>
              <ul>
                {selectedProject.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="project-features">
              <h4>Features</h4>
              <ul>
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {selectedProject.challenges && (
              <div className="challenges">
                <h4>Challenges</h4>
                <p>{selectedProject.challenges}</p>
              </div>
            )}

            <div className="dialog-buttons">
              {selectedProject.links.github && (
                <button
                  className="dialog-button"
                  onClick={() => handleLinkClick(selectedProject.links.github, 'GitHub')}
                  aria-label="Open GitHub repository"
                >
                  GitHub
                </button>
              )}
              {selectedProject.links.demo && (
                <button
                  className="dialog-button"
                  onClick={() => handleLinkClick(selectedProject.links.demo, 'Demo')}
                  aria-label="Open live demo"
                >
                  Live Demo
                </button>
              )}
            </div>

            {selectedProject.feedback && (
              <div className="feedback">
                <h4>Feedback</h4>
                <p>Score: {selectedProject.feedback.score}</p>
                <p>Notes: {selectedProject.feedback.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;