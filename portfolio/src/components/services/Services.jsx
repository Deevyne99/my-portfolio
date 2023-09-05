// import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useGlobalContext } from '../../hooks/context'
import Modal from '../modal/Modal'

const Services = () => {
  const { services, isModalOpen, openModal, darkMode } = useGlobalContext()
  // console.log(services)
  return (
    <section className='my-24 mx-4 lg:mx-24 md:mx-16 '>
      {isModalOpen && (
        <div className='fixed lg:absolute bg-[rgb(0,0,0)] top-0 left-0 w-full  h-full bg-opacity-50'></div>
      )}
      <div className='text-center'>
        <h1 className='md:text-5xl text-3xl'>Services</h1>
        <h3 className='mt-4 sm:text-2xl text-lg capitalize'>what i offer</h3>
      </div>
      {isModalOpen && <Modal />}
      <article
        className={`flex md:flex-row flex-col justify-center gap-16 mt-16`}
      >
        {services.map((item) => {
          const { id, position, icon } = item
          return (
            <div
              key={id}
              className={`flex flex-col w-3/4 mx-auto md:mx-0 md:w-1/2 lg:w-1/4 shadow-xl rounded-md  p-4 ${
                darkMode === 'dark' ? 'bg-[#00162c]' : 'bg-[#fff]'
              }`}
            >
              <div
                className={`mt-16 text-2xl text-[#635FC7] animate-bounce ${
                  isModalOpen ? '-z-50' : ''
                }`}
              >
                {icon}
              </div>
              <h4 className='mt-16 capitalize'>{position}</h4>
              <button
                className='mt-8 capitalize w-[100px] flex items-center gap-2 text-[#635FC7] '
                onClick={() => openModal(id)}
              >
                view more <FaArrowRightLong />
              </button>
              {/* {console.log(services)} */}
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Services
