import React from 'react'
// import image from '../../assets/div.jpeg'
const About = () => {
  return (
    <section className='mx-4 md:mx-16 lg:mx-24  '>
      <div className='text-center my-24 '>
        <h1 className='text-5xl'>About me</h1>
        <h3 className='mt-4'>introduction</h3>
        <article className='flex justify-between gap-12 mt-16 lg:mx-24 md:mx-12 xl:mx-32'>
          <div className='bg-hero bg-center bg-cover bg-no-repeat w-[400px] h-[250px] rounded-md'></div>
          <div className='flex  flex-col gap-12 '>
            <p className='max-w-md text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              assumenda quaerat quo reprehenderit ut quia voluptates modi
              perferendis, quos eaque. Laboriosam, magni repellendus quo dolorem
              adipisci officia! Facilis incidunt vel et, veniam maxime quos
              sunt.
            </p>
            <div className='flex justify-between max-w-md text-center'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-bold'>02+</h2>
                <p>
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
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
