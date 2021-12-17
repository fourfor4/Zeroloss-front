import React from 'react'
import Zerolossrtagolds from '../assets/images/Zerolossrtagolds.png'

import {
  FaTwitter,
  FaReddit,
  FaTelegramPlane,
} from 'react-icons/fa'


export default function Footer() {
  return (
    <section>
      <div className='container'>
        <img src={Zerolossrtagolds} className="mx-auto my-10" />
        <div className='text-center text-gray-400 leading-loose font-semibold md:flex md:justify-center pb-11 border-b-1 border-gray-500'>
          <p className='mx-5'>
            Launch App
          </p>
          <p className='mx-5'>
            FAQ
          </p>
          <p className='mx-5'>
            Buy
          </p>
        </div>
        <div className='text-3xl text-center text-white leading-loose font-semibold flex justify-center py-11 border-b-1 border-gray-500'>
          <p className='mx-5'>
            <FaTelegramPlane />
          </p>
          <p className='mx-5'>
            <FaTwitter />
          </p>
          <p className='mx-5'>
            <FaReddit />
          </p>
        </div>
        <div className='py-9 text-gray-400 text-center text-sm md:text-base'>
          <div className='mb-5'>
            Made with ❤️ for the ZEROLOSS Community
          </div>
          <div className='leading-loose mb-6'>
            <p>
              For all marketing and advertising, please contact our Marketing team:
            </p>
            <p className='text-white'>
              marketing@zeroloss.org
            </p>
          </div>
          <div className='mb-8'>
            For general inquiries, please contact: <span className='text-white'>info@zeroloss.org</span>
          </div>
        </div>
      </div>
    </section>
  )
}
