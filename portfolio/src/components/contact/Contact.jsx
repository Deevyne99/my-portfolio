import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socials = [
  {
    id: 1,
    label: 'GitHub',
    handle: '@kaludivine',
    icon: <FaGithub size={16} />,
    url: 'https://github.com',
  },
  {
    id: 2,
    label: 'LinkedIn',
    handle: 'Divine Kalu',
    icon: <FaLinkedin size={16} />,
    url: 'https://linkedin.com',
  },
  {
    id: 3,
    label: 'Twitter / X',
    handle: '@kaludivine',
    icon: <FaTwitter size={16} />,
    url: 'https://twitter.com',
  },
]

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up your form handler here (EmailJS, Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <div className='bg-black min-h-screen text-white' id='contact'>
      {/* ── Page header ── */}
      <div className='border-b border-[#1e1e1e] px-6 md:px-12 pt-16 pb-10'>
        <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-4'>
          Get in Touch
        </p>
        <h1
          className='font-extrabold uppercase text-white leading-[0.92] tracking-[-3px]'
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Contact<span className='text-violet-600'>.</span>
        </h1>
      </div>

      {/* ── Main grid — left info, right form ── */}
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_1fr]'>
        {/* LEFT — Info */}
        <div className='flex flex-col justify-between px-6 md:px-12 py-14 border-b lg:border-b-0 lg:border-r border-[#1e1e1e]'>
          <div>
            <div className='w-10 h-[3px] bg-violet-600 mb-8' />

            <h2
              className='font-extrabold text-white leading-[1.1] tracking-tight mb-6'
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              Let us build something
              <br />
              great together.
            </h2>

            <p className='text-[13.5px] leading-[1.85] text-[#777] font-light mb-12 max-w-sm'>
              Whether you have a project in mind, a role you think I would be a
              great fit for, or just want to say hello, my inbox is always open.
            </p>

            {/* Email — prominent */}
            <div className='mb-12'>
              <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-3'>
                Email
              </p>
              <a
                href='mailto:kaludivine545@gmail.com'
                className='group inline-flex items-center gap-3 text-white font-extrabold tracking-tight hover:text-violet-400 transition-colors duration-200'
                style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
              >
                kaludivine545@gmail.com
                <span className='text-base text-[#444] transition-all duration-200 group-hover:text-violet-500 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block'>
                  ↗
                </span>
              </a>
            </div>

            {/* Location */}
            <div className='mb-12'>
              <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-3'>
                Location
              </p>
              <p className='text-[14px] text-white font-semibold tracking-wide'>
                Lagos, Nigeria
              </p>
              <p className='text-[12px] text-[#555] mt-1'>
                Open to remote work worldwide
              </p>
            </div>

            {/* Availability */}
            <div>
              <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-3'>
                Availability
              </p>
              <div className='inline-flex items-center gap-2 text-[13px] text-[#aaa]'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0' />
                Available for new projects
              </div>
            </div>
          </div>

          {/* Socials — pinned to bottom */}
          <div className='mt-14 pt-8 border-t border-[#1e1e1e]'>
            <p className='text-[11px] tracking-[0.2em] uppercase text-[#555] mb-5'>
              Elsewhere
            </p>
            <div className='flex flex-col gap-4'>
              {socials.map(({ id, label, handle, icon, url }) => (
                <a
                  key={id}
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  className='group flex items-center justify-between text-[13px] text-[#666] hover:text-white transition-colors duration-200'
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-[#444] group-hover:text-violet-400 transition-colors'>
                      {icon}
                    </span>
                    <span>{label}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-[#444] text-[12px]'>{handle}</span>
                    <span className='text-[#333] group-hover:text-violet-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block transition-all'>
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className='px-6 md:px-12 py-14'>
          {submitted ? (
            /* Success state */
            <div className='flex flex-col items-start justify-center h-full min-h-[400px]'>
              <div className='w-10 h-[3px] bg-violet-600 mb-8' />
              <p className='text-5xl mb-6'>✦</p>
              <h3 className='font-extrabold text-white text-2xl tracking-tight mb-3'>
                Message sent.
              </h3>
              <p className='text-[13.5px] text-[#777] font-light leading-relaxed max-w-sm mb-8'>
                Thank you for reaching out. I will get back to you within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ name: '', email: '', message: '' })
                }}
                className='text-[12px] text-violet-400 hover:text-violet-300 tracking-widest uppercase transition-colors'
              >
                Send another message
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className='flex flex-col gap-0'>
              <div className='w-10 h-[3px] bg-violet-600 mb-10' />

              {/* Name */}
              <div className='border-b border-[#1e1e1e] mb-0'>
                <label className='block text-[11px] tracking-[0.2em] uppercase text-[#555] mb-3'>
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder='John Doe'
                  className='w-full bg-transparent text-white text-[15px] font-light placeholder-[#333] pb-4 focus:outline-none tracking-wide'
                />
                <div
                  className={`h-[1px] mb-0 transition-all duration-300 ${
                    focused === 'name' ? 'bg-violet-600' : 'bg-transparent'
                  }`}
                />
              </div>

              {/* Email */}
              <div className='border-b border-[#1e1e1e] mt-8 mb-0'>
                <label className='block text-[11px] tracking-[0.2em] uppercase text-[#555] mb-3'>
                  Your Email
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder='john@example.com'
                  className='w-full bg-transparent text-white text-[15px] font-light placeholder-[#333] pb-4 focus:outline-none tracking-wide'
                />
                <div
                  className={`h-[1px] transition-all duration-300 ${
                    focused === 'email' ? 'bg-violet-600' : 'bg-transparent'
                  }`}
                />
              </div>

              {/* Message */}
              <div className='border-b border-[#1e1e1e] mt-8 mb-0'>
                <label className='block text-[11px] tracking-[0.2em] uppercase text-[#555] mb-3'>
                  Message
                </label>
                <textarea
                  name='message'
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder='Tell me about your project or just say hello...'
                  className='w-full bg-transparent text-white text-[15px] font-light placeholder-[#333] pb-4 focus:outline-none resize-none tracking-wide leading-relaxed'
                />
                <div
                  className={`h-[1px] transition-all duration-300 ${
                    focused === 'message' ? 'bg-violet-600' : 'bg-transparent'
                  }`}
                />
              </div>

              {/* Submit */}
              <div className='mt-10'>
                <button
                  type='submit'
                  className='group inline-flex items-center gap-4 text-[13px] text-white tracking-widest uppercase hover:text-violet-300 transition-colors'
                >
                  Send Message
                  <span className='w-10 h-10 bg-violet-700 group-hover:bg-violet-600 flex items-center justify-center text-base flex-shrink-0 transition-all duration-200 group-hover:translate-x-1'>
                    ›
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
