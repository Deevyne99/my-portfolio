// import React from 'react'

const ProgressBar = ({ skill, level }) => {
  return (
    <div className='flex flex-col w-[100%]'>
      <div className='flex  justify-between'>
        <p>{skill}</p>
        <p>{level}%</p>
        {console.log(typeof level)}
      </div>
      <div className='mt-2  w-full h-2 bg-[#d0cfee] rounded-md'>
        <div
          className={`left-0 w-[${level}%] h-full bg-[#635FC7] rounded-md`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
