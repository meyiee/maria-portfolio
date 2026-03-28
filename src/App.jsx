import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Tool from './Components/Tool/Tool'
// import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar /><Hero /><About /><Tool /><Project /><Contact /><Footer />
    </>
  )
}

export default App