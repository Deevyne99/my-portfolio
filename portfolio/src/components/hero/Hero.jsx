import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'

// ── Replace these with your actual image imports ──
import img1 from '../../../src/assests/portfolio-picture.jpeg'
import img2 from '../../../src/assests/div.jpeg'
import img3 from '../../../src/assests/Dee-portfolio.jpeg'
// import img3 from '../../../src/assests/your-image-3.jpeg'
// import img4 from '../../../src/assests/your-image-4.jpeg'

const images = [img1, img2, img3] // swap with your real images array

const projects = [
  {
    id: 1,
    tag: 'UI Engineering',
    title: 'SaaS Analytics Dashboard',
    description:
      'Data-dense real-time dashboard with custom chart components, filter logic, and role-based access control.',
    tech: ['React', 'TypeScript'],
    bg: 'bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#4c1d95]',
    light: false,
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'
        width='180'
        height='180'
        viewBox='0 0 180 180'
      >
        <circle
          cx='90'
          cy='90'
          r='70'
          fill='none'
          stroke='#7c3aed'
          strokeWidth='1'
          opacity='0.5'
        />
        <circle
          cx='90'
          cy='90'
          r='50'
          fill='none'
          stroke='#7c3aed'
          strokeWidth='0.5'
          opacity='0.4'
        />
        <circle cx='90' cy='90' r='30' fill='#7c3aed' opacity='0.15' />
        <path
          d='M90 20 L90 160 M20 90 L160 90'
          stroke='#7c3aed'
          strokeWidth='0.5'
          opacity='0.3'
        />
      </svg>
    ),
  },
  {
    id: 2,
    tag: 'Full Stack',
    title: 'E-Commerce Platform',
    description:
      'End-to-end storefront with cart, Stripe payments, and an admin panel. Optimistic UI and ISR for performance.',
    tech: ['Next.js', 'Prisma'],
    bg: 'bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1d4ed8]',
    light: false,
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'
        width='180'
        height='180'
        viewBox='0 0 180 180'
      >
        <rect
          x='20'
          y='20'
          width='60'
          height='60'
          fill='none'
          stroke='#3b82f6'
          strokeWidth='1'
          opacity='0.5'
        />
        <rect
          x='50'
          y='50'
          width='80'
          height='80'
          fill='none'
          stroke='#3b82f6'
          strokeWidth='0.5'
          opacity='0.4'
        />
        <rect
          x='80'
          y='80'
          width='40'
          height='40'
          fill='#3b82f6'
          opacity='0.2'
        />
        <line
          x1='80'
          y1='20'
          x2='20'
          y2='80'
          stroke='#3b82f6'
          strokeWidth='0.5'
          opacity='0.3'
        />
      </svg>
    ),
  },
  {
    id: 3,
    tag: 'Design System',
    title: 'Component Library',
    description:
      '50+ accessible components documented in Storybook. Dark mode, theming tokens, and full a11y coverage.',
    tech: ['React', 'Storybook'],
    bg: 'bg-gradient-to-br from-[#0c1a0c] via-[#14532d] to-[#166534]',
    light: false,
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'
        width='180'
        height='180'
        viewBox='0 0 180 180'
      >
        <polygon
          points='90,10 170,150 10,150'
          fill='none'
          stroke='#22c55e'
          strokeWidth='1'
          opacity='0.5'
        />
        <polygon
          points='90,40 145,135 35,135'
          fill='none'
          stroke='#22c55e'
          strokeWidth='0.5'
          opacity='0.4'
        />
        <polygon points='90,70 120,120 60,120' fill='#22c55e' opacity='0.15' />
      </svg>
    ),
  },
  {
    id: 4,
    tag: 'Mobile App',
    title: 'Finance Tracker App',
    description:
      'Cross-platform budgeting app with charts, recurring entries, and local-first sync using Expo and SQLite.',
    tech: ['React Native', 'Expo'],
    bg: 'bg-gradient-to-br from-[#f5f0e8] to-[#e2d5c0]',
    light: true,
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25'
        width='160'
        height='160'
        viewBox='0 0 160 160'
      >
        <rect x='10' y='60' width='40' height='90' fill='#333' rx='2' />
        <rect x='60' y='30' width='40' height='120' fill='#333' rx='2' />
        <rect x='110' y='10' width='40' height='140' fill='#333' rx='2' />
        <line
          x1='10'
          y1='155'
          x2='155'
          y2='155'
          stroke='#333'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
]

const stats = [
  { num: '3+', label: 'Years' },
  { num: '20+', label: 'Projects' },
  { num: '12+', label: 'Clients' },
]

// const navItems = ['projects', 'about', 'skills', 'contact']

// ─────────────────────────────────────────────
// IMAGE SLIDER — clean single-render, no duplicate images
// ─────────────────────────────────────────────
const ImageSlider = ({ className = '', style = {}, showOverlay = true }) => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [direction, setDirection] = useState('left')
  const [animating, setAnimating] = useState(false)
  const lockRef = useRef(false) // hard lock prevents double-fires

  const goTo = (nextIndex, dir) => {
    if (lockRef.current) return
    lockRef.current = true
    setPrev(current)
    setDirection(dir)
    setAnimating(true)
    setCurrent(nextIndex)
    setTimeout(() => {
      setPrev(null)
      setAnimating(false)
      lockRef.current = false
    }, 700)
  }

  // Re-register interval whenever current changes so we always
  // have the latest index value — avoids stale closure bug
  useEffect(() => {
    const id = setInterval(() => {
      const isLast = current === images.length - 1
      goTo(isLast ? 0 : current + 1, isLast ? 'right' : 'left')
    }, 5000)
    return () => clearInterval(id)
  }, [current])

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideOutToLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes slideOutToRight {
          from { transform: translateX(0); }
          to   { transform: translateX(100%); }
        }
        .img-in-left   { animation: slideInFromRight 0.7s ease-in-out forwards; }
        .img-in-right  { animation: slideInFromLeft  0.7s ease-in-out forwards; }
        .img-out-left  { animation: slideOutToLeft   0.7s ease-in-out forwards; }
        .img-out-right { animation: slideOutToRight  0.7s ease-in-out forwards; }
      `}</style>

      {/* Outgoing image — only mounted during animation, unmounted after */}
      {prev !== null && animating && (
        <img
          src={images[prev]}
          alt='portrait'
          className={`absolute inset-0 w-full h-full object-cover object-top ${
            direction === 'left' ? 'img-out-left' : 'img-out-right'
          }`}
        />
      )}

      {/* Current image — always in DOM, animates in when switching */}
      <img
        key={current} // key change forces remount → CSS animation fires from scratch
        src={images[current]}
        alt='portrait'
        className={`absolute inset-0 w-full h-full object-cover object-top ${
          animating
            ? direction === 'left'
              ? 'img-in-left'
              : 'img-in-right'
            : ''
        }`}
      />

      {/* Static overlay — always on top, never animates */}
      {showOverlay && (
        <>
          <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20' />
          <div className='absolute bottom-0 left-0 right-0 z-30 p-7'>
            <p className='text-[10px] tracking-[0.18em] uppercase text-violet-400 mb-2'>
              Software Engineer
            </p>
            <p className='font-extrabold text-white text-[1.4rem] leading-[1.15] tracking-tight'>
              Designing thoughtful
              <br />
              digital experiences
            </p>
          </div>
        </>
      )}
    </div>
  )
}

const Hero = () => {
  return (
    <div className='font-sans bg-[#0a0a0a] text-white min-h-screen'>
      {/* ── NAV — fixed ── */}
      {/* <nav className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 border-b border-[#1e1e1e] bg-[#0a0a0a]/95 backdrop-blur-sm'>
        <div className='font-extrabold text-xl tracking-tight'>
          DK<span className='text-violet-600'>.</span>
        </div>
        <ul className='hidden md:flex gap-10 list-none m-0 p-0'>
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                className='text-[13px] text-[#888] hover:text-white transition-colors cursor-pointer tracking-wide capitalize'
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to='contact'
          smooth
          duration={500}
          className='text-[13px] bg-violet-700 hover:bg-violet-600 text-white px-5 py-2 rounded-sm tracking-wide transition-colors cursor-pointer'
        >
          Hire me
        </Link>
      </nav> */}
      {/* Offset for fixed nav height */}
      <div className='pt-[73px]'>
        {/* ══ MOBILE HERO (below md) ══ */}
        <div className='md:hidden flex flex-col border-b border-[#1e1e1e]'>
          {/* Full-height image — magazine cover with title overlaid */}
          <div
            className='relative w-full overflow-hidden'
            style={{ height: '92vw', maxHeight: '560px', minHeight: '380px' }}
          >
            <ImageSlider
              className='absolute inset-0 w-full h-full'
              showOverlay={false}
            />
            <div className='absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/70 to-transparent z-20 pointer-events-none' />
            <div className='absolute bottom-0 left-0 right-0 z-30 px-6 pb-8'>
              {/* <p className='text-[10px] tracking-[0.2em] uppercase text-violet-400 mb-3'>
                Based in Abuja, NG · Available for work
              </p> */}
              <h1
                className='font-extrabold uppercase text-white leading-[0.9] tracking-[-2px]'
                style={{ fontSize: 'clamp(2.8rem, 11vw, 4.5rem)' }}
              >
                Software
                <span className='text-violet-600'>›</span>
                <br />
                Engineer
              </h1>
            </div>
          </div>

          {/* Description + CTA */}
          <div className='px-6 py-8  border-[#1e1e1e]'>
            <div className='w-10 h-[3px] bg-violet-600 mb-5' />
            <p className='text-[13.5px] leading-[1.8] text-[#777] font-light mb-6'>
              I turn complex problems into clean, performant interfaces. From
              design systems to full-stack products — built with precision,
              care, and a strong eye for detail.
            </p>
            <div className='flex flex-wrap gap-2 mb-8'>
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map(
                (t) => (
                  <span
                    key={t}
                    className='text-[10px] px-3 py-1 border border-[#2a2a2a] text-[#666] rounded-full tracking-wide'
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
            <Link
              to='projects'
              smooth
              duration={500}
              className='inline-flex items-center gap-3 text-[13px] text-white tracking-wide cursor-pointer group'
            >
              See my work
              <span className='w-7 h-7 bg-violet-700 flex items-center justify-center text-sm flex-shrink-0 transition-transform group-hover:translate-x-1'>
                ›
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className='flex gap-8 px-6 py-6'>
            {stats.map((s) => (
              <div key={s.label}>
                <div className='font-extrabold text-2xl text-white tracking-tight'>
                  {s.num}
                </div>
                <div className='text-[11px] text-[#555] uppercase tracking-widest mt-0.5'>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ TABLET HERO (md to lg) ══ */}
        <div className='hidden md:grid lg:hidden grid-cols-[1fr_1fr]  border-[#1e1e1e]'>
          {/* Col 1 — Image with title overlay */}
          <div className='relative overflow-hidden min-h-[500px] border-r border-[#1e1e1e]'>
            <ImageSlider
              className='absolute inset-0 w-full h-full'
              showOverlay={false}
            />
            <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none' />
            <div className='absolute bottom-0 left-0 right-0 z-30 px-8 pb-8'>
              <p className='text-[10px] tracking-[0.18em] uppercase text-violet-400 mb-3'>
                Based in Lagos, NG · Available for work
              </p>
              <h1
                className='font-extrabold uppercase text-white leading-[0.9] tracking-[-2px]'
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}
              >
                Soft
                <br />
                ware<span className='text-violet-600'>›</span>
                <br />
                Eng
                <br />
                ineer
              </h1>
            </div>
          </div>

          {/* Col 2 — Description + stats + CTA */}
          <div className='flex flex-col justify-between px-8 py-12'>
            <div>
              <div className='w-10 h-[3px] bg-violet-600 mb-6' />
              <h2 className='font-bold text-[1rem] text-white mb-4 leading-snug'>
                Crafting interfaces
                <br />
                people love to use
              </h2>
              <p className='text-[13px] leading-[1.8] text-[#777] font-light mb-6'>
                I turn complex problems into clean, performant interfaces. From
                design systems to full-stack products — built with precision,
                care, and a strong eye for detail.
              </p>
              <div className='flex flex-wrap gap-2 mb-8'>
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map(
                  (t) => (
                    <span
                      key={t}
                      className='text-[10px] px-3 py-1 border border-[#2a2a2a] text-[#666] rounded-full tracking-wide'
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <Link
                to='projects'
                smooth
                duration={500}
                className='inline-flex items-center gap-3 text-[13px] text-white tracking-wide cursor-pointer group mb-10'
              >
                See my work
                <span className='w-7 h-7 bg-violet-700 flex items-center justify-center text-sm flex-shrink-0 transition-transform group-hover:translate-x-1'>
                  ›
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className='flex gap-8 pt-8 border-t border-[#1e1e1e]'>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className='font-extrabold text-2xl text-white tracking-tight'>
                    {s.num}
                  </div>
                  <div className='text-[11px] text-[#555] uppercase tracking-widest mt-0.5'>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ DESKTOP HERO ══ */}
        <div className='hidden lg:grid grid-cols-[1fr_420px_280px]  border-[#1e1e1e]'>
          {/* Col 1 — Title + stats */}
          <div className='flex flex-col justify-between px-12 py-16 border-r border-[#1e1e1e]'>
            <div>
              <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-8'>
                Based in Lagos, NG · Available for work
              </p>
              <h1
                className='font-extrabold uppercase text-white leading-[0.92] tracking-[-3px] mb-10'
                style={{ fontSize: 'clamp(3.2rem, 5.5vw, 5.5rem)' }}
              >
                Soft
                <br />
                ware<span className='text-violet-600'>›</span>
                <br />
                Eng
                <br />
                ineer
              </h1>
            </div>
            <div className='flex gap-10 pt-8 border-t border-[#1e1e1e]'>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className='font-extrabold text-2xl text-white tracking-tight'>
                    {s.num}
                  </div>
                  <div className='text-[11px] text-[#555] uppercase tracking-widest mt-0.5'>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — IMAGE SLIDER — only this column slides */}
          <ImageSlider className='border-r border-[#1e1e1e] min-h-[520px]' />

          {/* Col 3 — Description + CTA */}
          <div className='flex flex-col justify-between px-10 py-16'>
            <div>
              <div className='w-12 h-[3px] bg-violet-600 mb-6' />
              <h2 className='font-bold text-[1.05rem] text-white mb-4 leading-snug'>
                Crafting interfaces
                <br />
                people love to use
              </h2>
              <p className='text-[13.5px] leading-[1.8] text-[#777] font-light mb-8'>
                I turn complex problems into clean, performant interfaces. From
                design systems to full-stack products — built with precision,
                care, and a strong eye for detail.
              </p>
              <div className='flex flex-wrap gap-2 mb-10'>
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map(
                  (t) => (
                    <span
                      key={t}
                      className='text-[10px] px-3 py-1 border border-[#2a2a2a] text-[#666] rounded-full tracking-wide'
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <Link
                to='projects'
                smooth
                duration={500}
                className='inline-flex items-center gap-3 text-[13px] text-white tracking-wide cursor-pointer group'
              >
                See my work
                <span className='w-7 h-7 bg-violet-700 flex items-center justify-center text-sm flex-shrink-0 transition-transform group-hover:translate-x-1'>
                  ›
                </span>
              </Link>
              <div className='flex items-center gap-2 text-[12px] text-[#555] mt-2'>
                <span className='w-[7px] h-[7px] bg-green-500 rounded-full animate-pulse flex-shrink-0' />
                Available for new projects
              </div>
            </div>
          </div>
        </div>

        {/* ── PROJECT CARDS ── */}
        <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#1e1e1e] gap-6 px-6 py-12'
          id='projects'
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`flex hover:scale-105 flex-col cursor-pointer transition-colors duration-500 hover:bg-[#111] group ${
                i < projects.length - 1
                  ? 'border-b sm:border-b-0 sm:border-r border-[#1e1e1e]'
                  : ''
              }`}
            >
              <div
                className={`relative w-full flex items-end justify-start p-6 overflow-hidden flex-shrink-0 ${project.bg}`}
                style={{ aspectRatio: '3/4' }}
              >
                {project.shape}
                <span
                  className={`relative z-10 text-[10px] tracking-[0.15em] uppercase ${project.light ? 'text-[#555]' : 'text-white/60'}`}
                >
                  {project.tag}
                </span>
              </div>
              <div className='p-6 flex flex-col flex-1 justify-between'>
                <div>
                  <h3 className='font-extrabold text-[1.3rem] leading-[1.15] tracking-tight text-white mb-3'>
                    {project.title}
                  </h3>
                  <p className='text-[12.5px] text-[#666] leading-[1.65] font-light mb-5'>
                    {project.description}
                  </p>
                </div>
                <div className='flex justify-between items-center pt-4 border-t border-[#1e1e1e]'>
                  <div className='flex gap-2 flex-wrap'>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className='text-[10px] px-2 py-[3px] border border-[#2a2a2a] text-[#666] rounded-full tracking-wide'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className='text-base text-[#444] transition-all duration-200 group-hover:text-violet-500 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block'>
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE AVAILABILITY FOOTER ── */}
        <div className='lg:hidden flex items-center justify-center gap-2 py-5 border-t border-[#1e1e1e] text-[12px] text-[#555]'>
          <span className='w-[7px] h-[7px] bg-green-500 rounded-full animate-pulse flex-shrink-0' />
          Available for new projects
        </div>
      </div>{' '}
      {/* end pt-[73px] offset wrapper */}
    </div>
  )
}

export default Hero
