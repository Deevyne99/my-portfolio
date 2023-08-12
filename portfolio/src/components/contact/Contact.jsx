import { BiPhoneCall, BiEnvelope } from 'react-icons/bi'
import { BsEnvelopeAt } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
const Contact = () => {
  return (
    <section className='my-24 mx-4 md:mx-16 lg:mx-24'>
      <div className='text-center'>
        <h1 className='md:text-5xl text-3xl capitalize'>Contact me</h1>
        <h3 className='mt-4 sm:text-2xl text-lg capitalize'>Get in touch</h3>
      </div>
      <div className='flex gap-12 mx-16 mt-8'>
        <article className='flex flex-col gap-8  w-[40%]'>
          <div className='flex gap-4  items-center'>
            <BiPhoneCall className='text-3xl text-[#635FC7]' />
            <div className='flex flex-col gap-1'>
              <h3 className='text-2xl capitalize'>call me</h3>
              <p>081 4815 8802</p>
            </div>
          </div>

          <div className='flex gap-4  items-center'>
            <BiEnvelope className='text-3xl text-[#635FC7]' />
            <div className='flex flex-col gap-1'>
              <h3 className='text-2xl capitalize'>Email</h3>
              <p>kaludivine545@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-4  items-center'>
            <FiMapPin className='text-3xl text-[#635FC7]' />
            <div className='flex flex-col gap-1'>
              <h3 className='text-2xl capitalize'>Location</h3>
              <p>Jos City, Nigeria</p>
            </div>
          </div>
        </article>
        <form action=''>
          <div>
            <input type='text' />
            <input type='text' />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
