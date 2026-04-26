import { useState, useMemo } from 'react'

const blogs = [
  {
    id: 1,
    category: 'Engineering',
    title: 'How I built a real-time dashboard without burning down the server',
    excerpt:
      'WebSockets, throttling, and the hard lessons I learned trying to push live data to hundreds of concurrent users on a shoestring budget.',
    date: 'Apr 12, 2025',
    readTime: '6 min read',
    bg: 'bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#4c1d95]',
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30'
        width='160'
        height='160'
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
        <circle cx='90' cy='90' r='40' fill='#7c3aed' opacity='0.1' />
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
    category: 'Design',
    title: 'Why I stopped using purple gradients on white backgrounds',
    excerpt:
      'A deep dive into editorial design, color theory, and how studying Accenture and Linear changed the way I think about building interfaces.',
    date: 'Apr 5, 2025',
    readTime: '8 min read',
    bg: 'bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1d4ed8]',
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30'
        width='160'
        height='160'
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
          x='60'
          y='60'
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
          opacity='0.15'
        />
      </svg>
    ),
  },
  {
    id: 3,
    category: 'Career',
    title: 'Building in public changed how I think about shipping software',
    excerpt:
      'Six months of posting every weekend build taught me more about accountability and feedback than any course ever did.',
    date: 'Mar 28, 2025',
    readTime: '5 min read',
    bg: 'bg-gradient-to-br from-[#0c1a0c] via-[#14532d] to-[#166534]',
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30'
        width='160'
        height='160'
        viewBox='0 0 180 180'
      >
        <polygon
          points='90,10 170,150 10,150'
          fill='none'
          stroke='#22c55e'
          strokeWidth='1'
          opacity='0.5'
        />
        <polygon points='90,50 145,135 35,135' fill='#22c55e' opacity='0.1' />
      </svg>
    ),
  },
  {
    id: 4,
    category: 'Engineering',
    title: 'React state management in 2025: what I actually use and why',
    excerpt:
      'After trying Redux, Zustand, Jotai, and Context, here is the honest breakdown of when each one earns its place in a production codebase.',
    date: 'Mar 15, 2025',
    readTime: '7 min read',
    bg: 'bg-gradient-to-br from-[#1a0a00] via-[#7c2d12] to-[#c2410c]',
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30'
        width='160'
        height='160'
        viewBox='0 0 180 180'
      >
        <circle
          cx='60'
          cy='60'
          r='40'
          fill='none'
          stroke='#f97316'
          strokeWidth='1'
          opacity='0.5'
        />
        <circle
          cx='120'
          cy='120'
          r='40'
          fill='none'
          stroke='#f97316'
          strokeWidth='0.5'
          opacity='0.4'
        />
        <circle cx='90' cy='90' r='20' fill='#f97316' opacity='0.15' />
      </svg>
    ),
  },
  {
    id: 5,
    category: 'Design',
    title: 'Tailwind CSS is not a design system, and that is okay',
    excerpt:
      'The honest conversation about utility classes, design tokens, and why reaching for a component library too early is a trap most developers fall into.',
    date: 'Mar 3, 2025',
    readTime: '6 min read',
    bg: 'bg-gradient-to-br from-[#f5f0e8] to-[#e2d5c0]',
    light: true,
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'
        width='160'
        height='160'
        viewBox='0 0 160 160'
      >
        <rect x='10' y='60' width='40' height='90' fill='#333' rx='2' />
        <rect x='60' y='30' width='40' height='120' fill='#333' rx='2' />
        <rect x='110' y='10' width='40' height='140' fill='#333' rx='2' />
      </svg>
    ),
  },
  {
    id: 6,
    category: 'Career',
    title: 'What I wish I knew before my first frontend job',
    excerpt:
      "Nobody tells you that half the job is reading other people's code, managing expectations, and knowing when not to refactor.",
    date: 'Feb 18, 2025',
    readTime: '9 min read',
    bg: 'bg-gradient-to-br from-[#0f0f23] via-[#1e1b4b] to-[#312e81]',
    shape: (
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30'
        width='160'
        height='160'
        viewBox='0 0 180 180'
      >
        <polygon
          points='90,10 170,50 140,150 40,150 10,50'
          fill='none'
          stroke='#818cf8'
          strokeWidth='1'
          opacity='0.5'
        />
        <polygon
          points='90,40 145,65 125,130 55,130 35,65'
          fill='#818cf8'
          opacity='0.08'
        />
      </svg>
    ),
  },
]

const categories = [
  'All',
  'Engineering',
  'Design',
  'Career',
  'AI',
  'Blockchain',
  'Agriculture Tech',
  'System Design',
]

const Blog = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  return (
    <div className='bg-black min-h-screen pb-20 text-white' id='blog'>
      {/* ── Header ── */}
      <div className='border-b border-[#1e1e1e] px-6 md:px-12 pt-16 pb-10'>
        <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-4'>
          Thoughts and Writing
        </p>
        <h1
          className='font-extrabold uppercase text-white leading-[0.92] tracking-[-3px]'
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Deep
          <br />
          Dives<span className='text-violet-600'>.</span>
        </h1>
      </div>

      {/* ── Search + Filter bar ── */}
      <div className='border-b border-[#1e1e1e] px-6 md:px-12 py-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
        {/* Search input */}
        <div className='relative w-full sm:w-[320px]'>
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
            placeholder='Search articles...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full bg-transparent border border-[#2a2a2a] text-[13px] text-white placeholder-[#555] pl-9 pr-4 py-2.5 rounded-sm focus:outline-none focus:border-violet-600 transition-colors'
          />
        </div>

        {/* Category filters */}
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

      {/* ── Results count ── */}
      <div className='px-6 md:px-12 py-4  border-[#1e1e1e]'>
        <p className='text-[11px] text-[#555] tracking-widest uppercase'>
          {filtered.length} {filtered.length === 1 ? 'Article' : 'Articles'}
        </p>
      </div>

      {/* ── Blog grid ── */}
      {filtered.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 py-10'>
          {filtered.map((post, i) => (
            <div
              key={post.id}
              className={`flex flex-col cursor-pointer transition-colors duration-300 hover:bg-[#111] group
                border-b border-[#1e1e1e]
                ${i % 3 !== 2 ? 'lg:border-r lg:border-[#1e1e1e]' : ''}
                ${i % 2 !== 1 ? 'sm:border-r sm:border-[#1e1e1e] lg:border-r-0' : ''}
                ${i % 3 !== 2 ? 'lg:border-r border-[#1e1e1e]' : ''}
              `}
            >
              {/* Image area — tall 3/4 like portfolio cards */}
              <div
                className={`relative w-full overflow-hidden flex-shrink-0 flex items-end justify-start p-6 ${post.bg}`}
                style={{ aspectRatio: '3/4' }}
              >
                {post.shape}
                <span
                  className={`relative z-10 text-[10px] tracking-[0.15em] uppercase ${
                    post.light ? 'text-[#555]' : 'text-white/60'
                  }`}
                >
                  {post.category}
                </span>
              </div>

              {/* Text body */}
              <div className='p-6 flex flex-col flex-1 justify-between'>
                <div>
                  <h3 className='font-extrabold text-[1.3rem] leading-[1.15] tracking-tight text-white mb-3 group-hover:text-violet-300 transition-colors duration-200'>
                    {post.title}
                  </h3>
                  <p className='text-[12.5px] text-[#666] leading-[1.65] font-light mb-5'>
                    {post.excerpt}
                  </p>
                </div>

                <div className='flex justify-between items-center pt-4 border-t border-[#1e1e1e]'>
                  <div className='flex gap-3 items-center'>
                    <span className='text-[11px] text-[#555] tracking-wide'>
                      {post.date}
                    </span>
                    <span className='text-[#333]'>·</span>
                    <span className='text-[11px] text-[#555] tracking-wide'>
                      {post.readTime}
                    </span>
                  </div>
                  <span className='text-base text-[#444] transition-all duration-200 group-hover:text-violet-500 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block'>
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className='flex flex-col items-center justify-center py-32 px-6 text-center'>
          <p className='text-[#333] text-6xl mb-6'>✦</p>
          <p className='text-white font-extrabold text-xl mb-2'>
            No articles found
          </p>
          <p className='text-[#555] text-[13px]'>
            Try a different search term or filter.
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

export default Blog
