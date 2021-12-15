import React from 'react'
import classnames from 'classnames'
import { Spin as Hamburger } from 'hamburger-react'

export default function Sidebar({show, setShow}) {
  return (
    <div>
      <div 
        className={classnames('sidebar-backdrop', 'text-white', {'sidebar-backdrop-active':show})}
        onClick={() => {
          if (show) {
            setShow(false)
          }
        }}
      />
      <div className={classnames('sidebar', 'text-white', {'sidebar-active':show})}>
        <div className='flex'>
          <div className='ml-auto'>
            <Hamburger size={16} toggled={show} toggle={setShow} />
          </div>
        </div>
        <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
          Home
        </div>
        <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
          Launch App
        </div>
        <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
          IDO Launchpad
        </div>
        <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
          Rug Checker
        </div>
        <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
          LightPaper
        </div>
        <div className='p-4 cursor-pointer font-bold text-sm border-gray-600 hover:text-gray-300 border-b-1'>
          FAQ
        </div>
      </div>
    </div>
  )
}
