import { useGlobalContext } from '../../hooks/context'

// import React from 'react'

const Card = ({ item }) => {
  const { darkMode } = useGlobalContext()

  return (
    <div
      className={`${
        darkMode === 'dark' ? 'bg-[#00162c]' : ' bg-white'
      } p-3 shadow-md rounded-md hover:text-[#635FC7] capitalize`}
    >
      {item.name}
    </div>
  )
}

export default Card
