
import React from "react";
import "./Projects.scss"; // SCSS file for styling
import elemhands from "../../assets/images/elemhands.jpg";
import pdf from "../../assets/PitchDocs/elemhandsgdd.pdf";
import life1 from "../../assets/images/lifeonset1.png";
import life2 from "../../assets/images/lifeonset2.png";
import life3 from "../../assets/images/lifeonset3.png";
import neon1 from "../../assets/images/neon1.png";
import neon2 from "../../assets/images/neon2.jpg";
import neon3 from "../../assets/images/neon3.png";
import neonpdf from "../../assets/PitchDocs/PitchDocumentNeonNightmare.pdf"
import { Document, Page } from "react-pdf";

const projectsData = [
  {
    title: "Elemhands",
    videoUrl: "https://www.youtube.com/embed/_yOsClm7_KM?si=j04sNIQa7mVBgVOx", 
    description: "The player will control the protagonist, who wakes up without memory on a mysterious island, with the goal of freeing the island from a dark force that pervades it. To achieve this, the player must learn by exploring the island and traversing its biomes the 4 Elemental Signs: magical powers representing the 4 natural elements (Water, Fire, Air, and Earth), expressed through gestures in Sign Language. By using these signs, the player will need to exploit the surrounding environment to solve puzzles and free the island of Elementia from the evil presence, with the help of friendly companions, each corresponding to one of the elements, by their side.",
    image1: elemhands, // Update with actual image paths
    pdf: pdf
  },
  {
    title: "Life on Set",
    videoUrl: "https://www.youtube.com/embed/1zlKHRfq4SI?si=XqV9T8MDX7jwc_gk", 
    description: "Life On Set is a virtual adventure in which you can live the set through the eyes of the runner while learning the basics of the several jobs related to the film world.  The runner is in charge of helping the workers on the set by accomplishing all the tasks assigned to him: assisting the costume designer, aiding the sound technician or supporting the assistant director in the searching for the appropriate extras.  This is an exciting experience discovering the astonishing world of film making.",
    image1: life1,
    image2: life2,
    image3: life3,
    githubLink: "https://github.com/chettilaura/Life-on-set",
    itchioLink: "https://agn-ese.itch.io/life-on-set",
  },
  {
    title: "NeonNightmare",
    videoUrl: "https://www.youtube.com/embed/6LVeyZY4TXI?si=zFzO_U3POm21PXbM", 
    description: "Neon Nightmare is the story of a man who finds himself lost in the digital world, fight the enemies that he will meet during his journey and connect with his friend transistor. The world in which he is stuck in is full of viruses and references to the digital world.",
    image1: neon1,
    image2: neon2,
    image3: neon3,
    pdf: neonpdf,
    githubLink: "https://github.com/chettilaura/Neon-Nightmare",
    itchioLink: "https://agn-ese.itch.io/neonnightmare",
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
            <iframe width="560" height="315" src={project.videoUrl} title={`Video for ${project.title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p className="project-description">{project.description}</p>
          {/* Optional Images */}
          <div className="image-gallery">
            {project.image1 && <img src={project.image1} alt="Project visual 1" className="project-image"/>}
            {project.image2 && <img src={project.image2} alt="Project visual 2" className="project-image"/>}
            {project.image3 && <img src={project.image3} alt="Project visual 3" className="project-image"/>}
          </div>
           {/* Optional PDF */}
            {project.pdf && (
            <div className="pdf-container">
                
            <Document file={project.pdf} onLoadSuccess={onDocumentLoadSuccess} >
            </Document>
        </div>
      )}
          <div className="project-links">
           {project.githubLink &&  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>}
            {project.itchioLink && <a href={project.itchioLink} target="_blank" rel="noopener noreferrer">
              Itch.io
            </a>}
          </div>
        </div>
      ))}
    </div>
  );
}



