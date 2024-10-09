import {projects} from "../../portfolio"; 
import React from "react";
import "./ProjectDisplay.scss"; // Your styles for the ProjectDisplay component

export default function ProjectDisplay({
  title,
  videoSrc,
  description,
  images,
  githubLink,
  itchioLink,
}) {
  return (
    <div className="project-display">
      <h2 className="project-title">{title}</h2>
      <div className="video-container">
        <video
          className="project-video"
          controls
          width="100%"
          src={videoSrc}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="project-description">{description}</p>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            src={image}
            alt={`Project image ${index + 1}`}
            key={index}
            className="project-image"
          />
        ))}
      </div>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub
        </a>
        <a href={itchioLink} target="_blank" rel="noopener noreferrer" className="project-link">
          itch.io
        </a>
      </div>
    </div>
  );
}
