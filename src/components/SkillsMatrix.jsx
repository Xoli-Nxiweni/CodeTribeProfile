// import React from "react";
import "./styles/SkillsMatrix.css";

// eslint-disable-next-line react/prop-types
const SkillsMatrix = ({ data = [] }) => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills Matrix</h2>
        {data.length > 0 ? (
          <div className="skills-list">
            {data.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <p className="skill-name">{skill.name}</p>
                  <p className="skill-level">{skill.level}</p>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="skill-notes">{skill.notes}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#666' }}>No skills data available.</p>
        )}
      </div>
    </section>
  );
};

export default SkillsMatrix;
