import React from "react";
import isa from "../assets/images/isa.png";
import gopark from "../assets/images/gopark.png";
import "../assets/styles/Project.css";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects & Activities</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://hello-gopark.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gopark} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://hello-gopark.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>GoPark</h2>
          </a>
          <p>
            A groundbreaking project aimed at transforming parking and traffic
            in Hong Kong coming with machine learning model handling long-term
            dependencies in predicting parking lot vacancies. Help GoPark’s
            customers know where to park 30 times faster.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.instagram.com/polyusao_isa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={isa} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.instagram.com/polyusao_isa/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>International Student Association</h2>
          </a>
          <p>
            Leading the largest association in the university (1900+ followers
            on Instagram), aiming to promote cultural integration in the
            university community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
