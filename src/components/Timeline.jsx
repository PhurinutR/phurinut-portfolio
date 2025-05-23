import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.css";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jun 2025 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nvidia, Hong Kong
            </h4>
            <p>
              Developed generative models for various applications, including
              medical image and stock value predictions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 - Aug 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Scientist Trainee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              KPMG, Thailand
            </h4>
            <p>
              Developed agentic AI chatbot and auditing agent with RAG, Azure,
              OCR, slashing auditing time from weeks to seconds and preventing
              LLM hallucinations.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - July 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Deep Learning Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Saint Francis University, Hong Kong
            </h4>
            <p>
              Improved deepfake pipelines using GANs, facial alignment using
              Face Alignment Network (FAN), audio disentanglement, etc.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              StarkNet House Research Fellow
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              StarkWare, New York
            </h4>
            <p>
              Research on the topic “STARK: A Proof System Unlocking Blockchain
              Scalability”
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
