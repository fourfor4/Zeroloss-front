import React, { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

import logo from '../assets/images/logo.png'
import Sidebar from './Sidebar'

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <>
      <div className='text-white px-2 py-5'>
        <div className='container mx-auto flex items-center'>
          <img src={logo} />
          <div className='ml-auto'></div>
          <div className='hidden lg:block flex items-center'>
            <span className='p-2 cursor-pointer font-bold text-sm hover:text-gray-300'>Home</span>
            <span className='p-2 cursor-pointer font-bold text-sm hover:text-gray-300'>Launch App</span>
            <span className='p-2 cursor-pointer font-bold text-sm hover:text-gray-300'>IDO Launchpad</span>
            <span className='p-2 cursor-pointer font-bold text-sm hover:text-gray-300'>Rug Checker</span>
            <span className='p-2 cursor-pointer font-bold text-sm hover:text-gray-300'>Rug Checker</span>
            <span className='p-2 cursor-pointer font-bold text-sm hover:text-gray-300'>LightPaper</span>
            <span className='p-2 cursor-pointer font-bold text-sm hover:text-gray-300'>FAQ</span>
          </div>
          <button className='ml-3 rounded-md font-bold border-1 border-white py-2 px-7 hover:border-gray-300 hover:text-gray-300'>
            Buy
          </button>
          <button className='ml-2 rounded-md text-black font-bold bg-gold border-1 border-gold py-2 px-7'>
            DeFi
          </button>
          <div className='ml-3 lg:hidden'>
            <Hamburger toggled={sideBarOpen} toggle={setSideBarOpen} />
          </div>
        </div>
      </div>
      <Sidebar show={sideBarOpen} setShow={setSideBarOpen} />
    </>
  )
}
