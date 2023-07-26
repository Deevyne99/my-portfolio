import React from 'react'

const ProgressBar = () => {
  return (
    <div className='flex flex-col max-w-xs'>
      <div className='flex  justify-between'>
        <p>name</p>
        <p>level</p>
      </div>
      <div className='mt-2  w-full h-2 bg-[#d0cfee] rounded-md'>
        <div className='  left-0 w-[60%] h-full bg-[#635FC7] rounded-md'></div>
      </div>
    </div>
  )
}

export default ProgressBar
