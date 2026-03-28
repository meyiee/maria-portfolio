import React from 'react';
import { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/heroimage.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    };
  
    const observer = new window.IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1.03)';
          entry.target.style.filter = 'blur(0)';
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    const sections = document.querySelectorAll('.about, .tool-section, .projects, .contact');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(40px) scale(0.97)';
      section.style.filter = 'blur(6px)';
      section.style.transition = 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
      observer.observe(section);
    });
  
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="hero" id="home" style={{ overflow: 'clip' }}>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Hi, I'm <span className='maria'>Maria</span></h1>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Manila, Philippines</span>
            </div>
            <div className="status">
              <span>Available for new projects</span>
            </div>
            <p>
              UX/UI Designer passionate about creating beautiful and intuitive user experiences.
            </p>
            <div className="hero-buttons">
              <a href="maria_cv.pdf" 
                className="btn-primary"
                download="maria_cv.pdf">
                <i className="fas fa-download"></i>
                Download CV
              </a>
              <AnchorLink href="#projects" className="btn-secondary">
                View Projects <span>→</span>
              </AnchorLink>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/mary.obinga.7" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="www.linkedin.com/in/mary-obinga-b45208321" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/meyiee" className="social-link"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <img src={profile_img} alt="Maria" className="profile-img" />
              <div className="topBlur"/>
              <div className="bottomBlur"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
