// import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useGlobalContext } from '../../hooks/context'
const Services = () => {
  const { services } = useGlobalContext()
  // console.log(services)
  return (
    <section className='my-24 mx-4 lg:mx-24 md:mx-16'>
      <div className='text-center'>
        <h1 className='md:text-5xl text-3xl'>Services</h1>
        <h3 className='mt-4 sm:text-2xl text-lg capitalize'>what i offer</h3>
      </div>
      <article className='flex justify-center gap-16 mt-16'>
        {services.map((item) => {
          const { id, position, icon, services } = item
          return (
            <div
              key={id}
              className='flex flex-col w-1/5 shadow-xl rounded-md  p-4'
            >
              <div className='mt-16 text-2xl text-[#635FC7] animate-bounce'>
                {icon}
              </div>
              <h4 className='mt-16 capitalize'>{position}</h4>
              <button className='mt-8 capitalize w-[100px] flex items-center gap-2 text-[#635FC7]'>
                view more <FaArrowRightLong />
              </button>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Services
