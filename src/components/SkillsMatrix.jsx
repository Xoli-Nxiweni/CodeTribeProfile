import React from 'react';
import PropTypes from 'prop-types';
import { 
  Code2, 
  Database, 
  Palette, 
  LineChart, 
  Blocks,
  Brain,
  Globe,
  Camera,
  Puzzle,
  Wrench,
  Terminal,
  Server,
  Cloud,
  Smartphone,
  Shield
} from 'lucide-react';
import "./styles/SkillsMatrix.css";

const iconComponents = {
  programming: Code2,
  database: Database,
  design: Palette,
  analytics: LineChart,
  architecture: Blocks,
  ai: Brain,
  web: Globe,
  mobile: Smartphone,
  security: Shield,
  cloud: Cloud,
  backend: Server,
  frontend: Terminal,
  default: Blocks
};

const SkillsMatrix = ({ data = [] }) => {
  const renderIcon = (category = '') => {
    const normalizedCategory = category.toString().toLowerCase();
    const IconComponent = iconComponents[normalizedCategory] || iconComponents.default;
    return <IconComponent size={20} />;
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          Skills Matrix
        </h2>
        
        {data && data.length > 0 ? (
          <div className="skills-list">
            {data.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {renderIcon(skill?.category)}
                    <p className="skill-name">{skill?.name || 'Unnamed Skill'}</p>
                  </div>
                  <p className="skill-level">{skill?.level || 'N/A'}</p>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className="progress"
                    style={{ 
                      width: `${Math.min(Math.max(0, skill?.percentage || 0), 100)}%` 
                    }}
                  />
                </div>
                
                {skill?.notes && (
                  <p className="skill-notes">{skill.notes}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#666' }}>
            No skills data available.
          </p>
        )}
      </div>
    </section>
  );
};

SkillsMatrix.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.string,
      percentage: PropTypes.number,
      category: PropTypes.string,
      notes: PropTypes.string
    })
  )
};

export default SkillsMatrix;