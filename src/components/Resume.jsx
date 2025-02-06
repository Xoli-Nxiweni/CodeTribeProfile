import React from "react";
import "./styles/Resume.css";

const Resume = ({ data }) => {
  const resumeLink = "/Resume-Xoli-Nxiweni.pdf"; // Ensure correct file path

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">My Resume</h2>

        <div className="button-group">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume in a new tab"
            className="btn view-btn"
          >
            📄 View Resume
          </a>

          <a
            href={resumeLink}
            download="Xolile_Nxiweni_Resume.pdf"
            aria-label="Download the resume"
            className="btn download-btn"
          >
            📥 Download Resume
          </a>
        </div>

        {/* PDF Preview - Use embed instead of object */}
        <div className="resume-preview">
          <embed
            src={resumeLink}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
