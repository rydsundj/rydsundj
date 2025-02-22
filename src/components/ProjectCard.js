import React from 'react';
import "./ProjectButton.css";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, link, onClick, isDarkMode }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick(); 
    } else if (link) {
      window.open(link, '_blank', 'noopener,noreferrer'); 
    }
  };

  return (
    <div className={`project-card ${isDarkMode ? 'dark' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="button" onClick={handleButtonClick}>
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
