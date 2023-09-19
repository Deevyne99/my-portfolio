import React, { useState } from 'react'
import { useGlobalContext } from '../../hooks/context'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import { BiSolidGridAlt } from 'react-icons/bi'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
const Menu = () => {
  const { links, isMenuOpen, openMenu, closeMenu, darkMode, toggleDarkMode } =
    useGlobalContext()

  return (
    <aside
      className={`sm:hidden fixed  bottom-0 left-0 transition-all duration-300  right-0  shadow-2xl ${
        isMenuOpen ? 'h-[250px]' : 'h-[50px]'
      }  ${darkMode === 'dark' ? 'bg-[#00162c]' : ' bg-white'} `}
    >
      <div
        className={`  ${
          isMenuOpen ? 'hidden' : 'flex justify-between items-center  p-4'
        }`}
      >
        <h2 className=''>Divine</h2>
        <div className='flex gap-8'>
          <button onClick={() => toggleDarkMode()}>
            {darkMode === 'dark' ? <FaRegSun /> : <FaRegMoon />}
          </button>
          <button onClick={openMenu}>
            <BiSolidGridAlt />
          </button>
        </div>
      </div>
      <ul className='grid grid-cols-3 justify-center items-center  text-center py-8 gap-y-12 '>
        {links.map((link) => {
          const { id, name, url, icon } = link
          return (
            <li key={id} className=''>
              <Link
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className='capitalize'
                to={url}
                onClick={closeMenu}
                className='flex flex-col justify-center items-center'
              >
                {icon}
                {name}
              </Link>
            </li>
          )
        })}
        <button
          onClick={closeMenu}
          className=' text-center flex justify-center text-xl'
        >
          <AiOutlineClose />
        </button>
      </ul>
    </aside>
  )
}

export default Menu
