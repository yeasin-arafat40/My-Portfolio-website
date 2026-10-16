// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  // Tomar sob project ekhane array-er bhitor object hishebe thakbe
  const projectData = [
    {
      id: 1,
      title: "TechWave - Podcast",
      description: "Techwave modern podcast web application built with react, vite . Fully responsive design featurimg dynamic episode listings.",
      techStack: ["React", "Tailwind CSS", "Vite", "Netlify"],
      githubLink: "https://github.com/yeasin-arafat40/TechWave",
      liveLink: "https://techwave-podcast-web.netlify.app/"
    },
    {
      id: 2,
      title: "Expense-Tracker",
      description: "Full-stack MERN Expense Tracker with auth, charts, budget & dark mode.",
      techStack: ["React-Vite", "Node.js", "MongoDB", "MongoDB-Atlas"],
      githubLink: "https://github.com/yeasin-arafat40/expense-tracker",
      liveLink: "https://expensetrackeryeasin.netlify.app/"
    },
    {
      id: 3,
      title: "Cyberpunk Developer Portfolio",
      description: "Personal responsive portfolio website featuring interactive real-time photo customization, typing effects, and neon CSS glow.",
      techStack: ["React", "Vanilla CSS", "Vite"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            
            <div className="project-tech-list">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-btn">
                  GitHub ↗
                </a>
              )}
              {project.liveLink && project.liveLink !== "#" && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Demo 🚀
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;