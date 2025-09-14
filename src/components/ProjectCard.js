import React from "react";
import "./ProjectCard.css";
import "./ProjectButton.css";


const ProjectCard = ({ title, description, link, isDarkMode }) => {
  const handleClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`project-card ${isDarkMode ? "dark" : ""}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <button className="button" onClick={handleClick}>
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;
