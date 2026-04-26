import { Link } from 'react-scroll'
import image from '../../../src/assests/div.jpeg'

const About = () => {
  return (
    <section id='about' className='bg-[#0a0a0a] py-20 px-6 md:px-16'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-5xl mx-auto'>
        {/* LEFT — Portrait photo, fixed size, no absolute positioning */}
        <div className='flex-shrink-0 w-[280px] md:w-[340px]'>
          <img
            src={image}
            alt='portrait'
            className='w-full h-[380px] md:h-[460px] object-cover object-top'
          />
        </div>

        {/* RIGHT — Text content */}
        <div className='flex flex-col justify-center max-w-lg'>
          {/* Violet accent line */}
          <div className='w-10 h-[3px] bg-violet-600 mb-7' />

          {/* Paragraph */}
          <p className='text-[14px] leading-[1.85] text-[#888] font-light mb-8'>
            I build clean, scalable interfaces and love the craft of turning
            complex problems into simple, beautiful experiences. My work spans
            design systems, full-stack products, and everything in between —
            always built with precision and a strong eye for detail.
          </p>

          {/* Name + title */}
          <div className='mb-8'>
            <p className='text-white font-semibold text-[14px] tracking-wide'>
              Your Name
            </p>
            <p className='text-[#555] text-[12px] tracking-widest uppercase mt-1'>
              Software Engineer
            </p>
          </div>

          {/* CTA */}
          <Link
            to='contact'
            smooth
            duration={500}
            className='inline-flex items-center gap-3 text-[13px] text-white tracking-wide cursor-pointer group w-fit'
          >
            Get in touch
            <span className='w-7 h-7 bg-violet-700 flex items-center justify-center text-sm flex-shrink-0 transition-transform group-hover:translate-x-1'>
              ›
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
