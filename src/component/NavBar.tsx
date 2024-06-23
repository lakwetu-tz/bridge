import React from 'react'
import {MdDashboard, MdFilterAlt, MdFullscreen, MdMenu } from 'react-icons/md'

const NavBar = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
        <div className='flex justify-between items-center px-4 '>
            <div className='py-2 space-x-4'>
                  <button className='cursor-pointer'>
                      <MdDashboard className='w-6 h-6 text-green-600' />
                </button>
                <button>
                    <MdFilterAlt className='w-6 h-6 text-green-600' />
                </button>
            </div>

            <div className='flex space-x-4'>
                  <button type="button">
                      <MdFullscreen className='w-8 h-6 text-green-600' />
                  </button>
                <button type="button">
                    <MdMenu className='w-6 h-6 text-green-600' />
                </button>
               

            </div>
        </div>
    </div>
  )
}

export default NavBar