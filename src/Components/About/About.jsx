import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import pfp2 from "../../assets/pfp2.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={pfp2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Motivated AI Engineer & Full-Stack Developer with hands-on experience in Machine Learning, Deep Learning, and full-stack web development. Skilled in building responsive applications using Next.js, React.js, Tailwind CSS, FastAPI, and PostgreSQL/Prisma.
            </p>
            <p>
              I specialize in AI Agents SDK, n8n workflows, and MCP servers for intelligent automation. With expertise in IoT protocols, sensor integration, and edge computing, I deliver scalable, data-driven, and user-centric solutions with a strong problem-solving mindset.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Python & Machine Learning</p>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{width: "95%"}}></div>
                <span className="skill-percentage">95%</span>
              </div>
            </div>
            <div className="about-skill">
              <p>Full-Stack Development</p>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{width: "90%"}}></div>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
            <div className="about-skill">
              <p>AI Agents & Automation</p>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{width: "85%"}}></div>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
            <div className="about-skill">
              <p>IoT & Embedded Systems</p>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{width: "80%"}}></div>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
