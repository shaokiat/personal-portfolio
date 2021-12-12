import React from 'react';
import './ProjectItem.css';

const ProjectItem = function (props) {
  return (
    <div className="project-item-container">
      <div className="project-item-pic-wrap">
        <img src={props.src} alt="Project" className="project-item-img" />
      </div>
      <div className="project-link">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </div>
      <div className="project-description">
        {props.description}
      </div>
      <div className="project-link2">
        <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
          {props.githubDescription}
        </a>
      </div>
      <div className="tech-stack-container">
        {props.techstack}
      </div>
    </div>
  );
};

export default ProjectItem;
