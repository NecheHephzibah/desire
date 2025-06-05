import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';

const MobileNav = () => {
  return (
    <nav className='text-white'>
      <div className="cursor-pointer" onClick={() => MobileNav(false)}>
        <IoCloseOutline className='text-4xl' />
      </div>
      
    </nav>
  )
}

export default MobileNav