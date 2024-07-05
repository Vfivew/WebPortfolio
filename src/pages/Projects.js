import React, { useState } from "react";
import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";

const Projects = () => {
  const [showLearningProjects, setShowLearningProjects] = useState(false);

  const toggleLearningProjects = () => {
    setShowLearningProjects((prevShow) => !prevShow);
  };

  return (
    <main className="section">
      <div className="project-container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) =>
            project.isProject ? (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            ) : null
          )}
        </ul>
        <button onClick={toggleLearningProjects} className="toggle-button">
          {showLearningProjects ? "Hide Pet Projects" : "Pet Projects"}
        </button>
        <div className={`learning-projects ${showLearningProjects ? 'visible' : ''}`}>
          <h2 className="title-1">Learning Projects and Others</h2>
          <h4 className="title-hint">Please don't judge harshly, I was just learning back then :)</h4>
          <ul className="projects">
            {projects.map((project, index) =>
              !project.isProject ? (
                <Project
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              ) : null
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Projects;
