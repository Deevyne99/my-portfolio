import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../hooks/context'
import { navItems } from '../../data'

const Navbar = () => {
  const { isModalOpen } = useGlobalContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-5 border-b border-[#1e1e1e] bg-[#0a0a0a]/95 backdrop-blur-sm ${
          isModalOpen ? 'z-0' : 'z-50'
        }`}
      >
        {/* Logo */}
        <Link
          to='/'
          className='font-extrabold text-xl tracking-tight text-white'
        >
          DK<span className='text-violet-600'>.</span>
        </Link>

        {/* Desktop nav links */}
        <ul className='hidden md:flex gap-10 list-none m-0 p-0'>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.url}
                className={`text-[13px] transition-colors cursor-pointer tracking-wide capitalize ${
                  location.pathname === item.url
                    ? 'text-white'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — hidden on mobile */}
        <Link
          to='/contact'
          className='hidden md:inline-flex text-[13px] bg-violet-700 hover:bg-violet-600 text-white px-5 py-2 rounded-sm tracking-wide transition-colors'
        >
          Hire me
        </Link>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className='md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? 'w-5 rotate-45 translate-y-[7.5px]' : 'w-5'
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? 'w-5 -rotate-45 -translate-y-[7.5px]' : 'w-5'
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile sidebar overlay ── */}
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar panel — slides in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-[75vw] max-w-[320px] bg-[#0a0a0a] border-l border-[#1e1e1e] z-50 flex flex-col transition-transform duration-400 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className='flex justify-between items-center px-6 py-5 border-b border-[#1e1e1e]'>
          <Link
            to='/'
            className='font-extrabold text-xl tracking-tight text-white'
          >
            DK<span className='text-violet-600'>.</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className='w-8 h-8 flex items-center justify-center text-[#555] hover:text-white transition-colors'
            aria-label='Close menu'
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <div className='flex flex-col flex-1 px-6 pt-10'>
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.url}
              className={`group flex items-center justify-between py-5 border-b border-[#1e1e1e] transition-colors duration-200 ${
                location.pathname === item.url
                  ? 'text-white'
                  : 'text-[#666] hover:text-white'
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
              }}
            >
              <div className='flex items-center gap-4'>
                {/* Number */}
                <span className='text-[11px] text-[#333] tracking-widest'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='text-[15px] font-semibold tracking-wide capitalize'>
                  {item.name}
                </span>
              </div>
              <span className='text-[#333] group-hover:text-violet-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all inline-block text-base'>
                ↗
              </span>
            </Link>
          ))}
        </div>

        {/* Sidebar footer */}
        <div className='px-6 py-8 border-t border-[#1e1e1e]'>
          <p className='text-[11px] text-[#555] tracking-[0.2em] uppercase mb-4'>
            Available for work
          </p>
          <Link
            to='/contact'
            className='w-full flex items-center justify-center gap-3 text-[13px] bg-violet-700 hover:bg-violet-600 text-white py-3 tracking-wide transition-colors rounded-sm'
          >
            Hire me
            <span className='text-base'>›</span>
          </Link>

          <p className='text-[11px] text-[#444] mt-6 tracking-wide'>
            kaludivine545@gmail.com
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
