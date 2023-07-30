import { useGlobalContext } from '../../hooks/context'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const Portfolio = () => {
  const { portfolio, portfolioIndex, nextEvent, prevEvent } = useGlobalContext()
  console.log(portfolio)
  return (
    <section className='my-24 mx-8 md:mx-16 lg:mx-24'>
      <div className='flex flex-col justify-center items-center relative'>
        <h2 className='md:text-5xl text-3xl'>Portfolio</h2>
        <p className='mt-4 sm:text-2xl text-lg capitalize'>my recent works</p>
        <article className='flex relative w-full overflow-hidden  mx-auto h-[450px] sm:h-[500px] md:h-[350px]'>
          {portfolio.map((item, index) => {
            const { id, url, title, image, git, desc } = item
            let position = 'nextSlide'
            if (portfolioIndex === index) {
              position = 'activeSlide'
            }
            if (
              index === portfolioIndex - 1 ||
              (portfolioIndex === 0 && index === portfolio.length - 1)
            ) {
              position = 'lastSlide'
            }
            return (
              <div
                className={`absolute flex md:flex-row flex-col gap-3 md:gap-8 lg:gap-12 mt-4 lg:mt-8 items-center justify-center  w-full top-0 transform transition duration-500  left-0 opacity-0  ${
                  position === 'activeSlide' ? 'translate-x-0 opacity-100' : ''
                }
                ${position === 'nextSlide' ? 'translate-x-[100%]' : ''}
                ${position === 'lastSlide' ? 'translate-x-[-100%]' : ''}
                `}
                key={id}
              >
                <div className='md:w-[40%] w-full rounded-lg flex flex-col justify-center items-center'>
                  <img src={image} alt={title} />
                  <div className='w-full md:hidden flex text-2xl justify-between mt-4'>
                    <button
                      className='text-[#635FC7]  text-2xl '
                      onClick={() => prevEvent()}
                    >
                      {<FaChevronLeft />}
                    </button>
                    <button
                      className='text-[#635FC7] '
                      onClick={() => nextEvent()}
                    >
                      {<FaChevronRight />}
                    </button>
                  </div>
                </div>
                <article className='flex flex-col md:w-[40%] w-full text-center md:text-left tracking-wide leading-6 text-sm'>
                  {desc}

                  <div className='flex gap-4 mt-6 justify-center md:justify-start'>
                    <a
                      href={url}
                      className='text-white p-2 text-center rounded-md bg-[#635FC7] w-[100px]'
                      target='_blank'
                    >
                      Demo
                    </a>
                    <a
                      href={git}
                      className='text-white rounded-md text-center p-2 bg-[#635FC7] w-[100px]'
                      target='_blank'
                    >
                      Repo
                    </a>
                  </div>
                </article>
              </div>
            )
          })}
        </article>

        <button
          className='text-[#635FC7] hidden md:flex  top-[40%] sm:top-[90%] md:top-[30%] absolute left-0  lg:top-[50%] text-3xl '
          onClick={() => prevEvent()}
        >
          {<FaChevronLeft />}
        </button>
        <button
          className='text-[#635FC7] hidden md:flex top-[40%]  sm:top-[90%] absolute md:top-[30%] lg:top-[50%] right-0 text-3xl'
          onClick={() => nextEvent()}
        >
          {<FaChevronRight />}
        </button>
      </div>
    </section>
  )
}
export default Portfolio
