import React from "react";
import "./styles/FeedbackAndReflections.css";

const FeedbackAndReflections = ({ data }) => {
  return (
    <section id="feedback" className="feedback-section">
      <div className="feedback-container">
        <h2 className="feedback-title">Feedback and Reflections</h2>
        <div className="feedback-content">
          <div className="feedback-block">
            <h3 className="feedback-heading">Facilitator Feedback</h3>
            <p className="feedback-text">{data.facilitator}</p>
          </div>
          <div className="feedback-block">
            <h3 className="feedback-heading">Self-Reflection</h3>
            <p className="feedback-text">{data.selfReflection}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndReflections;
