import React from 'react'
import './ProjectItem.css'

const ProjectItem = function (props) {
  const {
    src,
    url,
    title,
    description,
    githubLink,
    githubDescription,
    techstack,
  } = props
  return (
    <div className="project-item-container">
      <div className="project-item-pic-wrap">
        <img src={src} alt="Project" className="project-item-img" />
      </div>
      <div className="project-link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
      <div className="project-description">{description}</div>
      <div className="project-link2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubDescription}
        </a>
      </div>
      <div className="tech-stack-container">{techstack}</div>
    </div>
  )
}

export default ProjectItem
