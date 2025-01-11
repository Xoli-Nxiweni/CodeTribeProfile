import React from "react";
import { Target } from "lucide-react";
import "./styles/Goals.css";

const Goals = ({ data }) => {
  return (
    <section id="goals" className="goals-section">
      <div className="goals-container">
        <div className="goals-header">
          <Target className="goals-icon" />
          <h2 className="goals-title">Post-Program Goals</h2>
        </div>
        <div className="goals-content">
          {/* Short-Term Goals */}
          <div className="goals-block">
            <h3 className="goals-subtitle">Short-Term Goals</h3>
            <ul className="goals-list">
              {data.shortTerm.map((goal, index) => (
                <li key={index} className="goals-item">
                  <span className="goal-bullet"></span>
                  <span className="goal-text">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Long-Term Goals */}
          <div className="goals-block">
            <h3 className="goals-subtitle">Long-Term Goals</h3>
            <ul className="goals-list">
              {data.longTerm.map((goal, index) => (
                <li key={index} className="goals-item">
                  <span className="goal-bullet"></span>
                  <span className="goal-text">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
