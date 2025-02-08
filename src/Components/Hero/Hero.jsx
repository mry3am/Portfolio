import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import profile_image from "../../assets/profile_image.jpg"
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_image} alt="" />
      <h1><span>I'm Maryam Munawar,</span> Frontend developer based in PAKISTAN </h1>
      <p>Creating visually stunning and highly interactive user interfaces with a focus on responsive design and performance</p>    
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset='50' href='#contact'>
        <div className="hero-connect">Connect With Me</div>
      </AnchorLink>
        <div className="hero-resume">
          My Resume
          </div>
          </div>    
    </div>
  )
}

export default Hero
