// import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

import { useGlobalContext } from '../../hooks/context'
const Modal = () => {
  const { expert, closeModal, darkMode } = useGlobalContext()

  return (
    <div
      className={`w-lg rounded-md flex-col fixed  justify-center items-center flex top-[25%] left-0 right-0 mx-auto my-auto z-10 ${
        darkMode === 'light' ? 'light' : 'dark'
      } bg-[#fff] w-[90%] max-w-[400px] p-4 pb-12 gap-4 `}
    >
      <button
        className='ml-auto text-2xl text-[#635FC7]'
        onClick={() => closeModal()}
      >
        <AiOutlineClose />
      </button>
      {expert.map((item, index) => {
        const { service } = item
        return (
          <div className='gap-2 flex flex-col' key={index}>
            {service.map((item, index) => {
              return (
                <div className='flex items-center gap-1' key={index}>
                  <BsCheckCircle className='text-[#635FC7]' />
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Modal
