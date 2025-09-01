import React, { useState, useRef } from 'react';
import './Navbar.css';
import underline from '../../assets/underline.svg';
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(""); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {  
    setIsMenuOpen(true);
    menuRef.current.style.right = "0"; 
  };

  const closeMenu = () => {  
    setIsMenuOpen(false);
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href='#home'>
            <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset='50' href='#about'>
            <p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset='50' href='#services'>
            <p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset='50' href='#experience'>
            <p onClick={() => { setMenu("experience"); closeMenu(); }}>Experience</p>
          </AnchorLink>
          {menu === "experience" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset='50' href='#skills'>
            <p onClick={() => { setMenu("skills"); closeMenu(); }}>Skills</p>
          </AnchorLink>
          {menu === "skills" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset='50' href='#work'>
            <p onClick={() => { setMenu("work"); closeMenu(); }}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset='50' href='#contact'>
            <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset='50' href='#contact'>
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;



