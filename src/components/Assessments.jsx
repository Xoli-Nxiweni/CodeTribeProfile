import React from "react";
import "./styles/Assessments.css";

const Assessments = ({ data }) => {
  return (
    <section id="assessments" className="assessments-section">
      <div className="assessments-container">
        <h2 className="assessments-title">Assessments</h2>
        <div className="assessments-list">
          {data.map((assessment, index) => (
            <div key={index} className="assessment-item">
              <h3 className="assessment-name">{assessment.name}</h3>
              <p className="assessment-score">
                <strong>Score:</strong> {assessment.score}
              </p>
              <p className="assessment-date">
                <strong>Date Completed:</strong> {assessment.dateCompleted}
              </p>
              {assessment.gitLink && (
                <a
                  href={assessment.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="assessment-link"
                >
                  View Code
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assessments;


