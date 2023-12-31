import React, { useState } from 'react'
import { social } from '../../data'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import { FaArrowCircleUp } from 'react-icons/fa'
const Footer = () => {
  const [show, setShow] = useState(true)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 500) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  window.addEventListener('scroll', toggleVisible)
  return (
    <footer className='bg-[#635fc7] flex h-[350px] md:h-[300px] mt-24'>
      <Link
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className='capitalize'
        to='hero'
        className={`mt-0 md:mt-12 p-5 w-[30px] absolute right-8 md:right-12 lg:right-24 animate-bounce  right-24 ${
          show ? 'visible' : 'invisible'
        }`}
      >
        <FaArrowCircleUp className='text-3xl text-[#fff]' />
      </Link>
      <div className='flex  lg:flex-row flex-wrap w-full lg:mx-28 md:mx-16 mx-8 justify-between items-center'>
        <div className='text-[#fff] flex flex-col gap-4'>
          <h1 className='text-3xl capitalize font-bold'>Divine</h1>
          <h2 className='text-xl capitalize font-semibold'>
            Fullstack Developer
          </h2>
        </div>
        <div>
          <ul className='flex sm:flex-row flex-col gap-4 text-[#fff] capitalize md:text-xl text-md'>
            <li>
              <a href=''>services</a>
            </li>
            <li>
              <a href=''>portfolio</a>
            </li>
            <li>
              <a href=''>contact me</a>
            </li>
          </ul>
        </div>
        <div className='flex gap-4 text-[#fff] list-none'>
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id} className=' '>
                <a href={url} target='_blank' className='text-decoration-none'>
                  {icon}
                </a>
              </li>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
