import React, { useState } from 'react'
import { useGlobalContext } from '../../hooks/context'
import { FaRegPaperPlane, FaArrowCircleDown } from 'react-icons/fa'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

const Hero = () => {
  const [visible, setVisible] = useState(true)
  const { social } = useGlobalContext()
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 80) {
      setVisible(false)
    } else if (scrolled <= 80) {
      setVisible(true)
    }
  }

  window.addEventListener('scroll', toggleVisible)
  return (
    <section className='mx-4   md:mx-16 sm:mx-4 ' id='hero'>
      <div className='flex my-4 lg:my-24 justify-between lg:gap-16 sm:gap-8 '>
        <ul className='hidden sm:flex  sm:relative  fixed top-16  gap-4 flex-col  lg:my-36 '>
          {social &&
            social.map((link) => {
              const { id, url, icon } = link
              return (
                <li key={id} className='hover:animate-bounce  '>
                  <a
                    href={url}
                    target='_blank'
                    className='text-[#635FC7] text-2xl '
                  >
                    {icon}
                  </a>
                </li>
              )
            })}
        </ul>
        <div className='flex my-8 flex-col-reverse sm:flex-row items-center lg:justify-between justify-center mx-auto bg-red-30   w-full  '>
          <article className='flex flex-col gap-4 sm:gap-4 w-[100%] lg:w-[45%] '>
            <h1 className='lg:text-5xl mt-3 tracking-wide leading-6 sm:mt-0 text-center sm:text-left text-3xl sm:text-3xl'>
              Hi,I am Divine
            </h1>
            <h3 className='lg:text-3xl tracking-wide leading-6 text-xl sm:text-2xl text-center sm:text-left'>
              Frontend developer
            </h3>
            <p className='sm:text-md md:text-md tracking-wide leading-8 text-sm sm:text-left text-center'>
              As a passionate and detail-oriented Frontend Developer with a
              strong foundation in crafting captivating user interfaces for the
              digital world. With a keen eye for design and a love for clean,
              efficient code, I am dedicated to turning creative concepts into
              functional, user-friendly web experiences.
            </p>
            <button className='p-4 mt-4 items-center rounded-md capitalize justify-center font-bold flex gap-2 text-white bg-[#635FC7] w-[150px] mx-auto sm:mx-0 '>
              contact me <FaRegPaperPlane />
            </button>
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='capitalize'
              to='about'
              className={`mt-0 md:mt-12 p-5 w-[30px] animate-bounce ${
                visible ? 'visible' : 'invisible'
              }`}
            >
              <FaArrowCircleDown className='text-3xl text-[#635FC7]' />
            </Link>
          </article>
          <div className='flex lg:w-[40%] w-[100%] justify-center '>
            <ul className='sm:hidden  flex  absolute left-4  top-16 sm:top-28  gap-4 flex-col  '>
              {social &&
                social.map((link) => {
                  const { id, url, icon } = link
                  return (
                    <li key={id} className=' hover:rotate-90'>
                      <a
                        href={url}
                        target='_blank'
                        className='text-[#635FC7] text-2xl '
                      >
                        {icon}
                      </a>
                    </li>
                  )
                })}
            </ul>
            <div
              className=' rounded-b-full  rounded-t-full h-[180px] w-[180px]
              sm:h-[210px] sm:w-[210px] 
            md:h-[240px] md:w-[240px]   bg-hero lg:h-[300px] lg:w-[300px] xl:h-[320px] xl:w-[320px] bg-center bg-cover'
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
