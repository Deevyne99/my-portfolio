// import React from 'react'
import { useGlobalContext } from '../../hooks/context'
import ProgressBar from '../progress bar/ProgressBar'

const Skills = () => {
  const { skills } = useGlobalContext()
  return (
    <section className='mx-4 md:mx-8 lg:mx-24 my-24' id='skills'>
      <div className='text-center'>
        <h1 className='md:text-5xl text-3xl'>Skills</h1>
        <h3 className='mt-4 sm:text-2xl text-lg capitalize'>
          my technical level
        </h3>
        <article className='flex sm:flex-row flex-col gap-10 md:gap-8 lg:gap-12 justify-center items-center  md:mx-16 lg:mx-20 xl:mx-24 mt-8 mx-4 '>
          {skills &&
            skills.map((item) => {
              // console.log(item)
              const { id, skill, levels, icon } = item
              return (
                <div
                  className='flex w-full items-center justify-center sm:w-[45%] flex-col '
                  key={id}
                >
                  <header className='flex gap-3  items-center'>
                    <div className='text-[#635FC7] text-2xl'>{icon}</div>
                    <h3 className='xl:text-3xl text-xl sm:text-2xl capitalize text-left'>
                      {skill}
                    </h3>
                  </header>
                  <div className='w-full mt-1 sm:mt-4 flex gap-3 flex-col justify-center items-center'>
                    {levels.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className='mx-auto flex justify-center w-full'
                        >
                          <ProgressBar {...item} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
        </article>
      </div>
    </section>
  )
}

export default Skills
