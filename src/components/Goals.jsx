import React from "react";
import { Target } from "lucide-react";
import "./styles/Goals.css";

const Goals = ({ data }) => {
  return (
    <section id="goals" className="goals-section">
      <div className="goals-container">
        <h2 className="goals-title">🎯 Post-Program Goals</h2>
        <p className="goals-subtitle">
          My key objectives and aspirations after completing the program.
        </p>

        <div className="goals-grid">
          {/* Short-Term Goals */}
          <div className="goals-card">
            <div className="goals-icon">
              <Target />
            </div>
            <h3 className="goals-heading">Short-Term Goals</h3>
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
          <div className="goals-card">
            <div className="goals-icon">
              <Target />
            </div>
            <h3 className="goals-heading">Long-Term Goals</h3>
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
