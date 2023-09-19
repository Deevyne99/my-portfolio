// import React from 'react'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import { useGlobalContext } from '../../hooks/context'
const Navbar = () => {
  const { links, darkMode, toggleDarkMode, isModalOpen } = useGlobalContext()
  // console.log(links)
  return (
    <header
      className={`sm:flex  ${
        isModalOpen ? 'z-0' : 'z-10'
      } top-0 left-0 right-0  hidden py-4 shadow-lg ${
        darkMode === 'dark' ? 'bg-[#00162c]' : ' bg-white'
      } fixed`}
    >
      <div className='mx-4 md:mx-16  w-full'>
        <nav className='flex   justify-between  '>
          <h1>Divine</h1>
          <ul className='flex justify-between gap-4'>
            {links &&
              links.map((link) => {
                const { id, name, url } = link
                return (
                  <li key={id}>
                    <Link
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className='capitalize'
                      to={url}
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            <button onClick={() => toggleDarkMode()}>
              {darkMode === 'dark' ? <FaRegSun /> : <FaRegMoon />}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
