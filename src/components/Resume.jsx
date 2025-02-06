// components/Resume.js
// import React from "react";
import "./styles/Resume.css";

// eslint-disable-next-line react/prop-types
const Resume = ({ data }) => {
  const resumeLink = data?.resumeLink || process.env.PUBLIC_URL + "/CurriculumVitae.pdf";

  return (
    <section id="resume">
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

        <div className="resume-preview">
        <object
  data={`${resumeLink}#toolbar=0&navpanes=0&scrollbar=1`}
  type="application/pdf"
  className="resume-iframe"
  aria-label="Resume preview"
>
  <p>Your browser does not support PDFs. <a href={resumeLink}>Download the PDF</a> instead.</p>
</object>

        </div>
      </div>
    </section>
  );
};

export default Resume;