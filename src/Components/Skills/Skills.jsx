import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & ML Tools",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Keras", "NumPy", "Pandas"]
    },
    {
      category: "Web Development (Full-Stack)",
      skills: ["Next.js", "React.js", "Node.js", "FastAPI", "Express.js", "PostgreSQL", "Prisma", "MongoDB", "REST APIs"]
    },
    {
      category: "AI & Automation",
      skills: ["AI Agents SDK", "n8n automation", "MCP Servers", "Generative AI", "NLP", "CV"]
    },
    {
      category: "Version Control & Tools",
      skills: ["Git", "GitHub", "Docker", "Postman", "API Integration", "Vercel", "GCP"]
    },
    {
      category: "IoT & Embedded Systems",
      skills: ["IoT protocols", "Sensor integration", "Edge computing", "IoT data processing"]
    }
  ];

  const languages = [
    { language: "English", proficiency: "Fluent" },
    { language: "Urdu", proficiency: "Native" }
  ];

  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills & Languages</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="skills-section">
        <div className="technical-skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="languages-section">
          <h2>Languages</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <h3>{lang.language}</h3>
                <span className="proficiency">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
