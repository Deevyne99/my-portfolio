import React from 'react'
import { useGlobalContext } from '../../hooks/context'
import image from '../../assets/div.jpeg'
const Hero = () => {
  const { social } = useGlobalContext()
  return (
    <section className='mx-4 my-20 md:mx-16 '>
      <div className='flex justify-between lg:gap-16 md:gap-8 '>
        <ul className='hidden md:flex  sm:relative  fixed top-16  gap-4 flex-col  lg:my-36 '>
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id} className=' '>
                <a href={url} className='text-red-500 text-3xl '>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
        <div className='flex flex-col-reverse md:flex-row items-center lg:justify-between justify-center mx-auto bg-red-30   w-full  '>
          <article className='flex flex-col gap-4 w-[100%] lg:w-[45%] '>
            <h1 className='text-5xl'>Hi,I am Divine</h1>
            <h3 className='text-3xl'>Frontend developer</h3>
            <p className='text-md'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              quisquam aspernatur molestiae earum, ut animi fugiat sapiente
              cupiditate assumenda, repellendus tenetur! Vitae doloremque ea,
              nesciunt labore dolore facere quidem illo! Tempore suscipit
              nostrum nam eos culpa quaerat, dignissimos veniam consequuntur
              saepe explicabo corporis quasi reprehenderit obcaecati cupiditate
              perferendis, optio nobis!
            </p>
          </article>
          <div className='flex lg:w-[40%] w-[100%] justify-center '>
            <ul className='md:hidden  flex  absolute left-4  top-16 sm:top-28  gap-4 flex-col  '>
              {social.map((link) => {
                const { id, url, icon } = link
                return (
                  <li key={id} className=' '>
                    <a href={url} className='text-red-500 text-2xl '>
                      {icon}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div
              className=' rounded-b-full  rounded-t-full h-[170px] w-[170px]
              sm:h-[180px] sm:w-[180px]
            md:h-[240px] md:w-[240px]   bg-hero lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] bg-center bg-cover'
            >
              {/* <img className='' src={image} alt='' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
