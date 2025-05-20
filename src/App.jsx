import React from "react";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { data } from "./data";
import "./App.css";

const App = () => {
  return (
    <>
      {/* Header Section - now full width */}
      <header className="header">
        <h1>Phurinut Rungrojkitiyos</h1>
        <h2>AI/ML Engineer & Full Stack Developer</h2>
        <div className="contact-bar">
          <a href="mailto:geo.phurinut@hotmail.com">
            <FiMail />
          </a>
          <a href="tel:+85260435857">
            <FiPhone />
          </a>
          <a
            href="https://github.com/PhurinutR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/phurinut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
      </header>
      <div className="container">
        <div className="main-grid">
          {/* Left Column */}
          <div className="left-column">
            <Section title="Technical Skills">
              <SkillCategory
                title="Programming Languages"
                items={data.skills.programming}
              />
              <SkillCategory
                title="AI/ML Technologies"
                items={data.skills.ai}
              />
              <SkillCategory title="Web Technologies" items={data.skills.web} />
              <SkillCategory
                title="Tools & Platforms"
                items={data.skills.tools}
              />
            </Section>

            <Section title="Languages">
              <div className="language-grid">
                {data.languages.map((lang) => (
                  <div key={lang} className="language-item">
                    {lang}
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <Section title="Experience">
              {data.experience.map((exp, i) => (
                <ExperienceItem key={i} {...exp} />
              ))}
            </Section>

            <Section title="Education">
              {data.education.map((edu, i) => (
                <EducationItem key={i} {...edu} />
              ))}
            </Section>

            <Section title="Achievements">
              <div className="achievements-grid">
                <ul>
                  {data.achievements.map((ach, i) => (
                    <div key={i} className="achievement-item">
                      <li key={i}>{ach}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <section className="section">
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

const SkillCategory = ({ title, items }) => (
  <div className="skill-category">
    <h4>{title}</h4>
    <div className="skill-items">
      {items.map((item, i) => (
        <span key={i} className="skill-item">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ company, role, date, points, tools }) => (
  <div className="experience-item">
    <div className="experience-header">
      <h4>{company}</h4>
      <span className="date">{date}</span>
    </div>
    <h5>{role}</h5>
    <ul>
      {points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
    <div className="tools">
      {tools.map((tool, i) => (
        <span key={i} className="tool-item">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

const EducationItem = ({ institution, degree, date, gpa, achievements }) => (
  <div className="education-item">
    <div className="education-header">
      <h4>{institution}</h4>
      <span className="date">{date}</span>
    </div>
    <h5>{degree}</h5>
    {gpa && <div className="gpa">CGPA: {gpa}</div>}
    <ul>
      {achievements.map((achievement, i) => (
        <li key={i}>{achievement}</li>
      ))}
    </ul>
  </div>
);

export default App;
