// import React from 'react'
import { useGlobalContext } from '../../hooks/context'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
const Navbar = () => {
  const { links, darkMode, toggleDarkMode } = useGlobalContext()
  // console.log(links)
  return (
    <header
      className={`sm:flex z-10 top-0 left-0 right-0  hidden py-4 shadow-lg ${
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
                    <a className='capitalize' href={url}>
                      {name}
                    </a>
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
