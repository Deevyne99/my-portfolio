import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-[#0a0a0a] border-t border-[#1e1e1e] relative overflow-hidden'>
      {/* ───── SUBTLE BACKGROUND WORD ───── */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <h1 className='text-white opacity-[0.03] font-extrabold tracking-tight text-[18vw] leading-none select-none'>
          IMPACT
        </h1>
      </div>

      <div className='relative z-10 px-6 md:px-16 py-24'>
        {/* ───── MAIN STATEMENT ───── */}
        <div className='max-w-3xl mb-20'>
          <h2 className='text-white font-extrabold leading-[1.05] tracking-tight text-[clamp(2.2rem,4vw,3.2rem)] mb-6'>
            Building technology that drives
            <span className='text-violet-500'> real impact</span>.
          </h2>

          <p className='text-[#777] text-[14px] leading-[1.8] max-w-xl'>
            I focus on crafting scalable, user-centered products that not only
            perform exceptionally but also create meaningful value. From idea to
            execution, every decision is intentional.
          </p>
        </div>

        {/* ───── GRID SECTION ───── */}
        <div className='grid md:grid-cols-3 gap-16 mb-20'>
          {/* BRAND */}
          <div>
            <div className='font-extrabold text-[1.4rem] tracking-[-0.5px] text-white mb-6'>
              DK<span className='text-violet-500'>.</span>
            </div>

            <p className='text-[#666] text-[13px] leading-[1.7]'>
              Software engineer focused on building high-quality digital
              experiences with precision, performance, and purpose.
            </p>
          </div>

          {/* NAV */}
          <div className='flex flex-col gap-3 text-[13px] text-[#777]'>
            <span className='text-[11px] uppercase tracking-widest text-[#555] mb-3'>
              Explore
            </span>

            <Link
              to='hero'
              smooth
              duration={500}
              className='hover:text-white transition cursor-pointer'
            >
              Home
            </Link>
            <Link
              to='about'
              smooth
              duration={500}
              className='hover:text-white transition cursor-pointer'
            >
              About
            </Link>
            <Link
              to='projects'
              smooth
              duration={500}
              className='hover:text-white transition cursor-pointer'
            >
              Projects
            </Link>
            <Link
              to='contact'
              smooth
              duration={500}
              className='hover:text-white transition cursor-pointer'
            >
              Contact
            </Link>
          </div>

          {/* CONTACT CTA */}
          <div className='flex flex-col justify-between'>
            <div>
              <span className='text-[11px] uppercase tracking-widest text-[#555] mb-3 block'>
                Let’s build
              </span>

              <p className='text-[#777] text-[13px] leading-[1.7] mb-6'>
                Have a project in mind or want to collaborate on something
                meaningful?
              </p>
            </div>

            <Link
              to='contact'
              smooth
              duration={500}
              className='inline-flex items-center gap-3 text-[13px] text-white tracking-wide group cursor-pointer'
            >
              Start a conversation
              <span className='w-7 h-7 bg-violet-600 flex items-center justify-center text-sm transition-transform group-hover:translate-x-1'>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ───── BOTTOM BAR ───── */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-[#1e1e1e] text-[12px] text-[#555]'>
          <p>© {new Date().getFullYear()} DK. All rights reserved.</p>

          <div className='flex items-center gap-2'>
            <span className='w-[6px] h-[6px] bg-violet-500 rounded-full animate-pulse' />
            <span>Open to impactful work</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
