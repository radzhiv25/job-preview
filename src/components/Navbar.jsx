import React from 'react'
import { BiBell } from 'react-icons/bi'
import { FaAtlassian } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='p-2 flex items-center justify-between px-4 border-b'>
        <div className="bg-gray-400 p-2">
            <h1 className='text-orange-600'>Logo</h1>
        </div>
        <div className="flex items-center space-x-3">
            <div className="bg-orange-500 text-white rounded-full px-2 py-1">
                <p>Jobs</p>
            </div>
            <div className="md:flex items-center space-x-5 md:visible hidden border rounded-full p-1">
                <p>Messages</p>
                <p>Payments</p>
                <p>Application</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <BiBell />
            <div className="flex items-center gap-1">
                <FaAtlassian className='rounded-full bg-blue-500 text-white'/>
                <MdArrowDropDown />
            </div>
        </div>
    </div>
  )
}

export default Navbar