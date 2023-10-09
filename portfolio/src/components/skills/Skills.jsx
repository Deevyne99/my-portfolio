// import React from 'react'
import { useGlobalContext } from '../../hooks/context'
import Card from '../progress bar/Card'
// import ProgressBar from '../progress bar/ProgressBar'

const Skills = () => {
  const { skills } = useGlobalContext()
  return (
    <section className='mx-4  md:mx-8 lg:mx-24 my-24 lg:my-32' id='skills'>
      <div className='text-center'>
        <h1 className='md:text-5xl text-3xl'>Skills</h1>
        <h3 className='mt-4 sm:text-2xl text-lg capitalize'>
          my technical level
        </h3>
        <article className='flex max-w-[450px] flex-wrap bg-red-40 mx-auto  gap-10 md:gap-8 lg:gap-12 justify-center items-center mt-12'>
          {skills &&
            skills.map((item) => {
              // console.log(item)
              const { id } = item
              return <Card key={id} item={item} />
            })}
        </article>
      </div>
    </section>
  )
}

export default Skills
