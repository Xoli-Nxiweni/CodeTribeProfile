import { useState, useEffect, useCallback } from "react";
import "./styles/Projects.css";

const Projects = ({ data }) => {
  const [activeTab, setActiveTab] = useState("individual");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';  // Prevent body scrolling when modal is open
    document.body.classList.add('modal-open'); // Optional: Add a class to manage modal state
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = ''; // Reset body overflow when modal is closed
      document.body.classList.remove('modal-open');
    }, 300); // Match the duration of the modal close animation
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen, closeModal]);

  const handleLinkClick = (e, url, type) => {
    e.stopPropagation();
    if (!url) {
      alert(`No ${type} link available for this project`);
      return;
    }
    window.open(url, "_blank", "noopener noreferrer");
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('project-dialog')) {
      closeModal();
    }
  };

  const projectsList = activeTab === "individual" ? data.individual : data.group;

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
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="project-item"
              onClick={() => openModal(project)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className={`project-dialog ${isModalOpen ? 'open' : 'closing'}`}
          role="dialog" 
          aria-modal="true"
          aria-labelledby="dialog-title"
          onClick={handleModalClick}
        >
          <div className="dialog-content">
            <button
              className="close-button"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ×
            </button>
            
            <h3 id="dialog-title">{selectedProject.title}</h3>
            
            <div className="dialog-image-container">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="dialog-image"
                loading="lazy"
              />
            </div>

            <div className="dialog-scroll-content">
              <p className="dialog-description">{selectedProject.description}</p>
              
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

              {selectedProject.feedback && (
                <div className="feedback">
                  <h4>Feedback</h4>
                  <p>Score: {selectedProject.feedback.score}</p>
                  <p>Notes: {selectedProject.feedback.notes}</p>
                </div>
              )}
            </div>

            <div className="dialog-buttons">
              {selectedProject.links.github && (
                <button
                  className="dialog-button"
                  onClick={(e) => handleLinkClick(e, selectedProject.links.github, 'GitHub')}
                  aria-label="Open GitHub repository"
                >
                  GitHub
                </button>
              )}
              {selectedProject.links.demo && (
                <button
                  className="dialog-button"
                  onClick={(e) => handleLinkClick(e, selectedProject.links.demo, 'Demo')}
                  aria-label="Open live demo"
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
