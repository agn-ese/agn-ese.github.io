
import React from "react";
import "./Projects.scss"; // SCSS file for styling

const projectsData = [
  {
    title: "Elemhands",
    videoUrl: "https://www.youtube.com/watch?v=_yOsClm7_KM", 
    description: "The player will control the protagonist, who wakes up without memory on a mysterious island, with the goal of freeing the island from a dark force that pervades it. To achieve this, the player must learn by exploring the island and traversing its biomes the 4 Elemental Signs: magical powers representing the 4 natural elements (Water, Fire, Air, and Earth), expressed through gestures in Sign Language. By using these signs, the player will need to exploit the surrounding environment to solve puzzles and free the island of Elementia from the evil presence, with the help of friendly companions, each corresponding to one of the elements, by their side.",
    image1: "path/to/image1.jpg", // Update with actual image paths
    image2: "path/to/image2.jpg",
    image3: "path/to/image3.jpg",
    githubLink: "https://github.com/yourrepo/project1",
    itchioLink: "https://itch.io/project1",
  },
  {
    title: "Life on Set",
    videoUrl: "https://www.youtube.com/watch?v=1zlKHRfq4SI&t=1s", 
    description: "Life On Set is a virtual adventure in which you can live the set through the eyes of the runner while learning the basics of the several jobs related to the film world.  The runner is in charge of helping the workers on the set by accomplishing all the tasks assigned to him: assisting the costume designer, aiding the sound technician or supporting the assistant director in the searching for the appropriate extras.  This is an exciting experience discovering the astonishing world of film making.",
    image1: "path/to/image4.jpg",
    image2: "path/to/image5.jpg",
    image3: "path/to/image6.jpg",
    githubLink: "https://github.com/yourrepo/project2",
    itchioLink: "https://itch.io/project2",
  },
  {
    title: "NeonNightmare",
    videoUrl: "https://www.youtube.com/watch?v=6LVeyZY4TXI", 
    description: "Neon Nightmare is the story of a man who finds himself lost in the digital world, fight the enemies that he will meet during his journey and connect with his friend transistor. The world in which he is stuck in is full of viruses and references to the digital world.",
    image1: "path/to/image4.jpg",
    image2: "path/to/image5.jpg",
    image3: "path/to/image6.jpg",
    githubLink: "https://github.com/yourrepo/project2",
    itchioLink: "https://itch.io/project2",
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <iframe
            src={project.videoSrc}
            className="project-video"
            title={`Video for ${project.title}`}
            frameBorder="0"
            allowFullScreen
            // Set the width and height according to your layout
            width="100%"
            height="315"
          />
          <p className="project-description">{project.description}</p>
          <div className="image-gallery">
            <img src={project.image1} alt="Project visual 1" className="project-image" />
            <img src={project.image2} alt="Project visual 2" className="project-image" />
            <img src={project.image3} alt="Project visual 3" className="project-image" />
          </div>
          <div className="project-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.itchioLink} target="_blank" rel="noopener noreferrer">
              Itch.io
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}



