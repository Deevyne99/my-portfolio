// import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { useGlobalContext } from '../../hooks/context'
const Modal = () => {
  const { expert } = useGlobalContext()

  return (
    <div className='w-lg rounded-md'>
      {expert.map((item, index) => {
        const { service } = item
        return (
          <div key={index}>
            {service.map((item, index) => {
              return (
                <div key={index}>
                  <BsCheckCircle />
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
