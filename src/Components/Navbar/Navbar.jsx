import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logos.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const menuButtonRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 1024) {
        if (menuRef.current && 
            !menuRef.current.contains(event.target) && 
            !menuButtonRef.current.contains(event.target)) {
          closeMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-container">
          <img className="nav-logo" src={logo} alt="Logo" />
          <img
            ref={menuButtonRef}
            src={menu_open}
            onClick={toggleMenu}
            alt="Menu"
            className="nav-mob-open"
          />
          <ul
            ref={menuRef}
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          >
            <img
              src={menu_close}
              onClick={closeMenu}
              alt="Close"
              className="nav-mob-close"
            />
            <li><AnchorLink className="anchor-link" href="#home">
                <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#about">
                <p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#skills">
                <p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#projects">
                <p onClick={() => { setMenu("work"); closeMenu(); }}>Portfolio</p>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
              </AnchorLink>
            </li>
          </ul>
          <div className="nav-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;