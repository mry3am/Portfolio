import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Experience = () => {
  const education = [
    {
      period: "2022 - Present",
      degree: "BACHELOR OF ARTIFICIAL INTELLIGENCE",
      institution: "National Textile University"
    },
    {
      period: "2020 - 2022",
      degree: "FSC PRE-ENGINEERING",
      institution: "Punjab Group of Colleges"
    },
    {
      period: "2018 - 2020",
      degree: "MATRICULATION (SCIENCE)",
      institution: "Divisional Public School, Faisalabad"
    }
  ];

  const workExperience = [
    {
      period: "2025",
      company: "FISTA SOLUTIONS",
      role: "AI AGENTS & Full-Stack Developer (Internship)",
      responsibilities: [
        "Developed end-to-end web applications using Next.js, FastAPI, and PostgreSQL/Prisma.",
        "Integrated AI Agents SDK and automated workflows with n8n and MCP servers to build intelligent systems.",
        "Deployed scalable applications using Docker, Vercel, and Google Cloud Platform (GCP)."
      ]
    },
    {
      period: "2023",
      company: "Edify College of IT",
      role: "Web Developer",
      responsibilities: [
        "Built responsive full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
        "Designed modern front-end interfaces with Tailwind CSS, ensuring responsiveness and cross-browser compatibility.",
        "Integrated REST APIs and used Git/GitHub for version control and collaboration."
      ]
    }
  ];

  return (
    <div id="experience" className="experience">
      <div className="experience-title">
        <h1>Education & Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="experience-section">
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-items">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-period">{edu.period}</div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="work-section">
          <h2>Work Experience</h2>
          <div className="work-items">
            {workExperience.map((work, index) => (
              <div key={index} className="work-item">
                <div className="work-period">{work.period}</div>
                <div className="work-content">
                  <h3>{work.role}</h3>
                  <h4>{work.company}</h4>
                  <ul>
                    {work.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
