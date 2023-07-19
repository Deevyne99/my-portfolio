// import React from 'react'
import { useGlobalContext } from '../../hooks/context'
const Navbar = () => {
  const { links } = useGlobalContext()
  console.log(links)
  return (
    <header className='p-4 shadow-md'>
      <div className='mx-4 md:mx-16 lg:mx-24 '>
        <nav className='flex justify-between '>
          <h1>Divine</h1>
          <ul className='flex justify-between gap-4'>
            {links.map((link) => {
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
