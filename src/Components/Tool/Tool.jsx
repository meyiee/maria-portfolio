import React from 'react'
import './Tool.css'

const Tool = () => {
  return (
    <section className="tool-section" id="tools">
    <h2 className="section-title">Tools <span className="gradient-text">I Used</span></h2>
     <div className="gradient-line"></div>
    <div className="subtitle">Techs I use daily</div>
    <div className="icon-row">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" alt="JavaScript"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" alt="CSS3"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" alt="HTML5"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg" alt="Figma"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg" alt="Canva"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" alt="Git"/>
    </div>
    <div className="subtitle"> Other tools I've used in projects</div>
    <div className="icon-row">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" alt="React"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg" alt="Bootstrap"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" alt="TypeScript"/>
      {/* <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vue-dot-js.svg" alt="Vue.js"/> */}
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" alt="Tailwind CSS"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sass.svg" alt="SASS"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" alt="Python"/>
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" alt="MySQL"/>
       <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/blender.svg" alt="Blender"/>
    </div>
  </section>
  )
}

export default Tool