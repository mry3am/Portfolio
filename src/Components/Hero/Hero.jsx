import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import profile_image from "../../assets/profile_image.jpg"
const Hero = () => {
  const handleResumeClick = () => {
    window.open('/MaryamCv.jpg', '_blank');
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_image} alt="" />
      <h1><span>I'm Maryam Munawar,</span> AI Engineer & Full-Stack Developer based in PAKISTAN </h1>
      <p>Passionate about building intelligent systems, scalable web applications, and AI-powered solutions. Specializing in Machine Learning, Deep Learning, and full-stack development with modern technologies.</p>    
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset='50' href='#contact'>
        <div className="hero-connect">Connect With Me</div>
      </AnchorLink>
        <div className="hero-resume" onClick={handleResumeClick}>
          My Resume 📄
          </div>
          </div>    
    </div>
  )
}

export default Hero
