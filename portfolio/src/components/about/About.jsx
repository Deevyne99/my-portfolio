// import React from 'react'
// import image from '../../assets/div.jpeg'
import { FaRegPaperPlane } from 'react-icons/fa'
const About = () => {
  return (
    <section className='mx-4 md:mx-16 lg:mx-24  ' id='about'>
      <div className='text-center my-4 '>
        <h1 className='md:text-5xl text-3xl'>About me</h1>
        <h3 className='mt-4 sm:text-2xl text-lg capitalize'>my introduction</h3>
        <article className='flex flex-col justify-center sm:flex-row sm:justify-between gap-4 sm:gap-6 md:gap-12 mx-4 mt-8 md:mt-16 lg:mx-24 md:mx-12 xl:mx-32'>
          <div className='bg-hero bg-center bg-cover bg-no-repeat w-full  sm:w-[400px] h-[250px] rounded-md '></div>
          <div className='flex  justify-center items-center  flex-col gap-8 sm:gap-8 lg:gap-8 '>
            <p className='max-w-md tracking-wide leading-6 sm:text-md md:text-md text-sm sm:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              assumenda quaerat quo reprehenderit ut quia voluptates modi
              perferendis, quos eaque. Laboriosam, magni repellendus quo dolorem
              adipisci officia! Facilis incidunt vel et, veniam maxime quos
              sunt.
            </p>
            <div className='flex justify-between w-full tracking-wide sm:text-md md:text-md text-sm leading-6  text-center'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-bold text-center'>02+</h2>
                <p className='text-center'>
                  years <br /> experience
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-bold'>20+</h2>
                <p>
                  Projects <br /> completed
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-bold'>02+</h2>
                <p>
                  years <br /> experience
                </p>
              </div>
            </div>
            <button className='p-4  items-center sm:mr-auto rounded-md capitalize justify-center font-bold flex gap-2 text-white bg-[#635FC7] w-[150px]'>
              contact me <FaRegPaperPlane />
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
