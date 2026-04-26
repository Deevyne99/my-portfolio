import { useState, useMemo } from 'react'

const allProjects = [
  {
    id: 1,
    title: 'SaaS Analytics Dashboard',
    category: 'Full Stack',
    desc: 'Data-dense real-time dashboard with custom chart components, filter logic, and role-based access control.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    url: '#',
    git: '#',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    year: '2025',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    desc: 'End-to-end storefront with cart, Stripe payments, and an admin panel. Optimistic UI and ISR for performance.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    url: '#',
    git: '#',
    tech: ['Next.js', 'Prisma', 'Stripe'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Component Library',
    category: 'Frontend',
    desc: '50+ accessible components documented in Storybook. Dark mode, theming tokens, and full a11y coverage.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    url: '#',
    git: '#',
    tech: ['React', 'Storybook', 'TypeScript'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Finance Tracker App',
    category: 'Mobile',
    desc: 'Cross-platform budgeting app with charts, recurring entries, and local-first sync using Expo and SQLite.',
    image:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    url: '#',
    git: '#',
    tech: ['React Native', 'Expo', 'SQLite'],
    year: '2024',
  },
  {
    id: 5,
    title: 'AI Content Generator',
    category: 'AI',
    desc: 'A tool that uses large language models to generate, refine, and structure long-form content for marketing teams.',
    image:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    url: '#',
    git: '#',
    tech: ['Next.js', 'OpenAI', 'Tailwind'],
    year: '2025',
  },
  {
    id: 6,
    title: 'Blockchain Voting System',
    category: 'Blockchain',
    desc: 'A decentralised voting application on Ethereum with smart contracts ensuring tamper-proof ballot casting.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    url: '#',
    git: '#',
    tech: ['Solidity', 'Ethers.js', 'React'],
    year: '2024',
  },
]

const categories = [
  'All',
  'Full Stack',
  'Frontend',
  'Mobile',
  'AI',
  'Blockchain',
]

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [hovered, setHovered] = useState(null)

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  return (
    <div className='bg-black min-h-screen text-white pb-20' id='projects'>
      {/* ── Page header ── */}
      <div className='border-b border-[#1e1e1e] px-6 md:px-12 pt-16 pb-10'>
        <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-4'>
          Work and Builds
        </p>
        <h1
          className='font-extrabold uppercase text-white leading-[0.92] tracking-[-3px]'
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Projects<span className='text-violet-600'>.</span>
        </h1>
      </div>

      {/* ── Search + Filter ── */}
      <div className='border-b border-[#1e1e1e] px-6 md:px-12 py-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
        <div className='relative w-full sm:w-[280px]'>
          <svg
            className='absolute left-3 top-1/2 -translate-y-1/2 text-[#555]'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            <circle cx='11' cy='11' r='8' />
            <path d='m21 21-4.35-4.35' />
          </svg>
          <input
            type='text'
            placeholder='Search projects or tech...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full bg-transparent border border-[#2a2a2a] text-[13px] text-white placeholder-[#555] pl-9 pr-4 py-2.5 rounded-sm focus:outline-none focus:border-violet-600 transition-colors'
          />
        </div>

        <div className='flex gap-2 flex-wrap'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] tracking-widest uppercase px-4 py-2 rounded-sm border transition-colors ${
                activeCategory === cat
                  ? 'bg-violet-700 border-violet-700 text-white'
                  : 'border-[#2a2a2a] text-[#666] hover:border-violet-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Project count ── */}
      <div className='px-6 md:px-12 py-4  border-[#1e1e1e]'>
        <p className='text-[11px] text-[#555] tracking-widest uppercase'>
          {filtered.length} {filtered.length === 1 ? 'Project' : 'Projects'}
        </p>
      </div>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-6'>
          {filtered.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex flex-col border-b border-[#1e1e1e] cursor-pointer transition-colors duration-300
                ${i % 3 !== 2 ? 'lg:border-r border-[#1e1e1e]' : ''}
                ${i % 2 !== 1 ? 'md:border-r md:border-[#1e1e1e] lg:border-r-0' : ''}
                ${i % 3 !== 2 ? 'lg:border-r border-[#1e1e1e]' : ''}
                ${hovered === project.id ? 'bg-[#0d0d0d]' : 'bg-black'}
              `}
            >
              {/* Image with overlay on hover */}
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-[220px] md:h-[260px] object-cover transition-transform duration-700 ${
                    hovered === project.id ? 'scale-105' : 'scale-100'
                  }`}
                />

                {/* Dark scrim always present, deeper on hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 bg-black ${
                    hovered === project.id ? 'opacity-30' : 'opacity-50'
                  }`}
                />

                {/* Project number — top left */}
                <span className='absolute top-4 left-5 font-extrabold text-white/20 text-4xl leading-none tracking-tighter select-none'>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Category tag — top right */}
                <span className='absolute top-5 right-5 text-[10px] tracking-[0.15em] uppercase text-white/60 bg-black/40 px-2 py-1'>
                  {project.category}
                </span>

                {/* Year — bottom left */}
                <span className='absolute bottom-4 left-5 text-[11px] text-white/40 tracking-widest'>
                  {project.year}
                </span>
              </div>

              {/* Text body */}
              <div className='p-6 flex flex-col flex-1 justify-between'>
                <div>
                  <h3
                    className={`font-extrabold text-[1.2rem] leading-[1.2] tracking-tight mb-3 transition-colors duration-200 ${
                      hovered === project.id ? 'text-violet-300' : 'text-white'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className='text-[12.5px] text-[#666] leading-[1.7] font-light mb-5'>
                    {project.desc}
                  </p>

                  {/* Tech pills */}
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className='text-[10px] px-2 py-[3px] border border-[#2a2a2a] text-[#666] rounded-full tracking-wide'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div className='flex justify-between items-center pt-4 border-t border-[#1e1e1e]'>
                  <div className='flex gap-5'>
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noreferrer'
                      className='text-[12px] text-white tracking-wide hover:text-violet-400 transition-colors'
                    >
                      Live demo
                    </a>
                    <a
                      href={project.git}
                      target='_blank'
                      rel='noreferrer'
                      className='text-[12px] text-[#555] tracking-wide hover:text-white transition-colors'
                    >
                      View repo
                    </a>
                  </div>
                  <span
                    className={`text-base transition-all duration-200 inline-block ${
                      hovered === project.id
                        ? 'text-violet-500 translate-x-1 -translate-y-1'
                        : 'text-[#444]'
                    }`}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center py-32 px-6 text-center'>
          <p className='text-[#333] text-6xl mb-6'>✦</p>
          <p className='text-white font-extrabold text-xl mb-2'>
            No projects found
          </p>
          <p className='text-[#555] text-[13px]'>
            Try a different search term or category.
          </p>
          <button
            onClick={() => {
              setSearch('')
              setActiveCategory('All')
            }}
            className='mt-6 text-[12px] text-violet-400 hover:text-violet-300 tracking-widest uppercase transition-colors'
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage
