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
              I’m a Frontend Developer with some solid experience under my belt.
              I enjoy building clean, responsive interfaces and am excited to
              keep growing and tackling new challenges in the field.
            </p>
            <p>
              My passion for frontend development is evident in both my hands-on
              experience and the enthusiasm I bring to every project. I’m
              committed to delivering high-quality, user-centric designs with
              dedication and creativity.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"40%"}} /></div>

          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
