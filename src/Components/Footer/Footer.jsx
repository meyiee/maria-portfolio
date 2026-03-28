import React from 'react'
import './Footer.css'
import logo from '../../assets/logos.svg'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                <img src={logo} alt="Logo" />
                    <p>Creating digital experiences that matter</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Quick Links</h4>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Services</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="link-group">
                        <h4>Social</h4>
                        <a href="#"><i className="fab fa-facebook-f"></i><span> Facebook</span></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i><span>LinkedIn</span> </a>
                        <a href="#"><i className="fab fa-github"></i><span>GitHub</span> </a>
                        <a href="#"><i className="fab fa-dribbble"></i><span>Dribbble</span> </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Maria. All rights reserved.</p>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer