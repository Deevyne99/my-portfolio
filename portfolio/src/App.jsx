// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'

import ProjectsPage from './components/Pages/ProjectsPage'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Blog from './components/blog/Blog'
// import { useGlobalContext } from './hooks/context
// import Menu from './components/menu/Menu'

const App = () => {
  // const { toggleDarkMode, darkMode } = useGlobalContext()

  return (
    <div className='relative'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <About />
              {/* <Skills /> */}
              {/* <Services /> */}
              <Portfolio />
              {/* <Contact /> */}
            </>
          }
        />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Menu></Menu> */}
      <Footer />
    </div>
  )
}

export default App
