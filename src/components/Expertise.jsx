import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.css";

const labelsFirst = [
  "OpenCV",
  "PyTorch",
  "LangChain",
  "Agentic AI",
  "GANs",
  "Computer Vision",
  "NLP",
  "RAG",
  "Gen AI",
];

const labelsSecond = [
  "Node",
  "Express",
  "jQuery",
  "React",
  "Bootstrap",
  "MongoDB",
  "MySQL",
  "Three.js",
  "Django",
  "JSP",
  "Servlets",
];

const labelsThird = [
  "Git",
  "MLOps",
  "CI/CD",
  "Azure",
  "Pinecone",
  "Vercel",
  "Linux",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>AI and Machine Learning</h3>
            <p>
              I push the exploration power of mankind with my expertise in Deep
              Learning, NLP, Computer Vision, and Gen AI. I've built practical
              solutions like automated data analysis tools, and deepfake
              pipelines using RAG, GANs, etc.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technology:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I advance digital innovation through my full-stack web development
              expertise in frontend frameworks (JavaScript, HTML, CSS,
              Bootstrap, and React), backend systems (Node.js, MongoDB, MySQL),
              and real-time business solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technology:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Automation & Supporting Tech</h3>
            <p>
              I leverage robust CI/CD pipelines, Git version control, cloud
              computing (Azure), and other technological solutions to streamline
              seamless system operations, driving efficiency and innovation
              while ensuring end-to-end scalability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technology:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
