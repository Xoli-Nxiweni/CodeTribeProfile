// components/Resume.js
import React from "react";
import "./styles/Resume.css";
import resume from "/CurriculumVitae.pdf";

const Resume = ({ data }) => {
  const resumeLink = data?.resumeLink || resume;

  return (
    <section id="resume">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

        {/* View Resume Button */}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View resume in a new tab"
          className="view-resume-button"
        >
          View Resume
        </a>

        {/* Download Resume Button */}
        <a
          href={resumeLink}
          download
          aria-label="Download the resume"
          className="download-button"
        >
          Download Resume
        </a>

        {/* Resume Preview with Error Fallback */}
        {resumeLink ? (
          <iframe
            src={resumeLink}
            className="resume-iframe"
            title="Resume Preview"
            aria-label="Resume preview iframe"
            onError={(e) => {
              e.target.style.display = "none";
              alert("Failed to load resume. Please use the download button.");
            }}
          />
        ) : (
          <p className="error-message">
            The resume could not be loaded. Please download it instead.
          </p>
        )}
      </div>
    </section>
  );
};

export default Resume;
