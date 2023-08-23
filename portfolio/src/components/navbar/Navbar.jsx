// import React from 'react'
import { useGlobalContext } from '../../hooks/context'
const Navbar = () => {
  const { links } = useGlobalContext()
  // console.log(links)
  return (
    <header className='sm:flex z-10 top-0 left-0 right-0  hidden py-4 shadow-lg bg-[#fdfdfd] fixed'>
      <div className='mx-4 md:mx-16  w-full'>
        <nav className='flex   justify-between  '>
          <h1>Divine</h1>
          <ul className='flex justify-between gap-4'>
            {links &&
              links.map((link) => {
                const { id, name, url } = link
                return (
                  <li key={id}>
                    <a className='capitalize' href={url}>
                      {name}
                    </a>
                  </li>
                )
              })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
