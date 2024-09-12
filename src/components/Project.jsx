// src/components/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      {image && <img src={image} alt={title} />}
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        )}
        {deployedLink && (
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Deployed Application
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
