import { useState, useEffect } from 'react'
import { useGlobalContext } from '../../hooks/context'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Portfolio = () => {
  const { portfolio } = useGlobalContext()
  const [index, setIndex] = useState(0)
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!portfolio || portfolio.length === 0) return null

  const handleNext = () => {
    setIndex((prev) => (prev === portfolio.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? portfolio.length - 1 : prev - 1))
  }

  return (
    <section className='bg-[#0a0a0a] border-t border-[#1e1e1e]' id='portfolio'>
      {/* ── Section label ── */}
      <div className='px-6 md:px-12 pt-10 pb-6 border-b border-[#1e1e1e]'>
        <p className='text-[11px] tracking-[0.2em] uppercase text-[#555]'>
          Selected Work
        </p>
      </div>

      {/* ── Slider viewport ── */}
      {/* On md+ we show 88% width so the next slide peeks in from the right */}
      {/* On mobile we show 100% — clean full-width, no peeking */}
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${index * (isMd ? 88 : 100)}%)`,
          }}
        >
          {portfolio.map((item) => {
            const { id, url, title, image, git, desc } = item
            return (
              <div
                key={id}
                className='flex-shrink-0 w-full md:w-[88%] flex flex-col md:flex-row border-b border-[#1e1e1e] md:border-r md:border-[#1e1e1e]'
              >
                {/* Image — full width on mobile, half on md+ */}
                <div className='w-full md:w-[45%] flex-shrink-0'>
                  <img
                    src={image}
                    alt={title}
                    className='w-full h-[240px] sm:h-[320px] md:h-[480px] object-cover'
                  />
                </div>

                {/* Text — below image on mobile, right side on md+ */}
                <div className='flex flex-col justify-center px-6 sm:px-8 md:px-14 py-10 md:py-20 border-t md:border-t-0 md:border-l border-[#1e1e1e] flex-1'>
                  <div className='w-10 h-[3px] bg-violet-600 mb-6' />

                  <h3 className='text-white font-extrabold text-xl md:text-2xl leading-tight tracking-tight mb-4'>
                    {title}
                  </h3>

                  <p className='text-[13.5px] leading-[1.85] text-[#777] font-light mb-8 max-w-md'>
                    {desc}
                  </p>

                  <div className='flex gap-6 flex-wrap'>
                    <a
                      href={url}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-3 text-[13px] text-white tracking-wide group'
                    >
                      Live demo
                      <span className='w-7 h-7 bg-violet-700 flex items-center justify-center text-sm flex-shrink-0 transition-transform group-hover:translate-x-1'>
                        ›
                      </span>
                    </a>

                    <a
                      href={git}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-3 text-[13px] text-[#555] tracking-wide hover:text-white transition-colors'
                    >
                      View repo
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Bottom bar — counter + nav ── */}
      <div className='flex items-center justify-between px-6 md:px-12 py-5 border-t border-[#1e1e1e]'>
        {/* Slide counter */}
        <span className='text-[11px] text-[#555] tracking-widest uppercase'>
          {index + 1} / {portfolio.length}
        </span>

        {/* Arrows */}
        <div className='flex items-center gap-3'>
          <button
            onClick={handlePrev}
            className='w-11 h-11 flex items-center justify-center border border-[#2a2a2a] text-[#888] hover:border-violet-600 hover:text-white transition-colors'
            aria-label='Previous project'
          >
            <FaChevronLeft size={13} />
          </button>

          <button
            onClick={handleNext}
            className='w-11 h-11 flex items-center justify-center bg-violet-700 hover:bg-violet-600 text-white transition-colors'
            aria-label='Next project'
          >
            <FaChevronRight size={13} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
