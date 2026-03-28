import React, { useState } from 'react';
import './About.css';
import about_img from '../../assets/about-img.png';

const About = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  const handleImageClick = () => {
    setIsGlowing(!isGlowing);
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="gradient-line"></div>
        <div className="about-section">
          <div className="about-left">
            <img 
              src={about_img} 
              alt="Mary" 
              className={`about-image ${isGlowing ? 'glow' : ''}`}
              onClick={handleImageClick}
            />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>Hello, with a passion for turning tech knowledge into real-world solutions. My journey so far includes hands-on customer service experience and a rewarding internship at a healthcare organization, where I got to see firsthand how technology can make a meaningful impact.</p>
              <p>Whether it's collaborating on a project, solving complex problems, or diving into core IT concepts, I bring both enthusiasm and a strong work ethic to everything I do. I thrive in team environments and enjoy challenges that push me to learn and grow.</p>
              <p>I'm always looking for opportunities to apply what I've learned and contribute to innovative, purpose-driven projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;