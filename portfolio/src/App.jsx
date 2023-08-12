// import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
    </div>
  )
}

export default App
