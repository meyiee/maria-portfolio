import React, { useState } from 'react';
import './About.css';
import about_img from '../../assets/about-img.jpg';

const About = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  const handleImageClick = () => {
    setIsGlowing(!isGlowing);
  };

  const journey = [
    {
      role: 'Freelance Software Tester',
      org: 'Test IO',
      desc: 'Performed manual testing across websites and applications, identifying and documenting bugs with an eye for detail and a tester\u2019s curiosity.'
    },
    {
      role: 'Web Developer Intern',
      org: 'Magellan Solutions',
      desc: 'Collaborated on a Laravel-based website, created flowcharts and technical documentation, and conducted system testing — building a foundation in structured, team-based development.'
    },
    {
      role: 'Healthcare Intern',
      org: 'Diabetes Philippines, Inc.',
      desc: 'Maintained patient records in Microsoft Excel and designed publication materials for events and social media, blending organization with visual communication.'
    },
    {
      role: 'Part-time Service Crew',
      org: 'McDonald\u2019s — 13 months',
      desc: 'Built communication, adaptability, and time management skills in a fast-paced environment — habits that carry directly into collaborative project work.'
    }
  ];

  const stats = [
    { value: '2', label: 'Internships' },
    { value: '13+', label: 'Months work experience' },
    { value: '1', label: 'Freelance QA platform' },
    { value: '4+', label: 'Areas of technical experience' }
  ];

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
            <p className="about-hero">
              Turning ideas into <em>functional digital experiences</em> through development, testing, and
              continuous learning.
            </p>

            <div className="about-grid">
              <div className="about-block">
                <span className="about-label">About</span>
                <p className="about-text">
                  I recently completed a Bachelor of Science in Information Technology, with
                  hands-on experience across healthcare administration, web development, and
                  software testing. I enjoy understanding how things work, then finding clear,
                  practical ways to make them better.
                </p>
              </div>

              <div className="about-block">
                <span className="about-label">Focus</span>
                <p className="about-text">
                  I enjoy work that sits between structure and creativity — building functional
                  websites, testing them carefully, and documenting how they work along the way.
                </p>
              </div>

              <div className="about-block">
                <span className="about-label">Experience</span>
                <p className="about-text">
                  Currently a Freelance Software Tester with Test IO, alongside prior internships as a Web
                  Developer Intern at Magellan Solutions and Healthcare Intern at Diabetes Philippines, Inc.
                </p>
              </div>

              <div className="about-block">
                <span className="about-label">Strengths</span>
                <p className="about-text">
                  HTML, CSS, JavaScript, PHP, Laravel, and MySQL, paired with communication,
                  adaptability, and attention to detail built through 13 months of customer-facing
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-journey">
          <h3 className="journey-title">Professional journey</h3>
          <div className="journey-list">
            {journey.map((item, i) => (
              <div className="journey-item" key={i}>
                <div className="journey-heading">
                  <h4>{item.role}</h4>
                  <span className="journey-org">{item.org}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;