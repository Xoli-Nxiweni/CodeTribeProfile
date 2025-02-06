import React from "react";
import "./styles/FeedbackAndReflections.css";
import { FaChalkboardTeacher, FaUser } from "react-icons/fa";

const FeedbackAndReflections = ({ data }) => {
  return (
    <section id="feedback" className="feedback-section">
      <div className="feedback-container">
        <h2 className="feedback-title">💡 Feedback & Reflections</h2>
        <p className="feedback-subtitle">
          Insights and reflections from both the facilitator and myself.
        </p>

        <div className="feedback-grid">
          <div className="feedback-card">
            <div className="feedback-icon">
              <FaChalkboardTeacher />
            </div>
            <h3 className="feedback-heading">Facilitator Feedback</h3>
            <p className="feedback-text">{data.facilitator}</p>
          </div>

          <div className="feedback-card">
            <div className="feedback-icon">
              <FaUser />
            </div>
            <h3 className="feedback-heading">Self-Reflection</h3>
            <p className="feedback-text">{data.selfReflection}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndReflections;
