import React, { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import Sidebar from './Sidebar'

export default function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const lightPaperLink = 'https://drive.google.com/file/d/16bC22RMgPc5hUMIYpJELsNtWB6GMCLgb/view?usp=sharing'
  return (
    <>
      <div className='text-white px-2 py-5'>
        <div className='container mx-auto flex items-center'>
          <img src={logo} />
          <div className='ml-auto'></div>
          <div className='hidden lg:block flex items-center'>
            <Link to={'/'}><span className='p-2 cursor-pointer font-semibold text-sm hover:text-gray-300'>Home</span></Link>
            <Link to={'/defi'}><span className='p-2 cursor-pointer font-semibold text-sm hover:text-gray-300'>Launch App</span></Link>
            <Link to={'/idolaunchpad'}><span className='p-2 cursor-pointer font-semibold text-sm hover:text-gray-300'>IDO Launchpad</span></Link>
            <Link to={'/rugchecker'}><span className='p-2 cursor-pointer font-semibold text-sm hover:text-gray-300'>Rug Checker</span></Link>
            <a href={lightPaperLink} target="_blank"><span className='p-2 cursor-pointer font-semibold text-sm hover:text-gray-300'>LightPaper</span></a>
            <span className='p-2 cursor-pointer font-semibold text-sm hover:text-gray-300'>FAQ</span>
          </div>
          <button className='ml-3 rounded-md font-semibold border-1 border-white py-2 px-7 hover:border-gray-300 hover:text-gray-300'>
            Buy
          </button>
          <Link to={'/defi'}><button className='ml-2 rounded-md text-black font-semibold bg-gold border-1 border-gold py-2 px-7'>
            DeFi
          </button></Link>
          <div className='ml-3 lg:hidden'>
            <Hamburger toggled={sideBarOpen} toggle={setSideBarOpen} />
          </div>
        </div>
      </div>
      <Sidebar show={sideBarOpen} setShow={setSideBarOpen} />
    </>
  )
}
