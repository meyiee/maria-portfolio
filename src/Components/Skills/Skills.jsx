import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="container">
            <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
            <div className="gradient-line"></div>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Frontend</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <div className="skill-name">HTML5</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "95%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">CSS3</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">JavaScript</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "85%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">React</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "80%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Design</h3>
                    <div className="skill-items">
                        <div className="skill-item">
                            <div className="skill-name">UI/UX</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "90%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">Figma</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "85%"}}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">Photoshop</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "75%"}}></div>
                            </div>
                        </div>
                         <div className="skill-item">
                            <div className="skill-name">Canva</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: "95%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills