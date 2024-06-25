import React from 'react'
import { BiBell } from 'react-icons/bi'
import { FaAtlassian } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { FiBriefcase, FiMessageSquare } from "react-icons/fi";
import { RiHandCoinLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";

const Navbar = () => {
  return (
    <div className='p-2 flex items-center justify-between px-4 border-b'>
        <div className="bg-gray-400 p-2">
            <h1 className='text-orange-600'>Logo</h1>
        </div>
        <div className="flex items-center space-x-3">
            <div className="bg-orange-500 text-white rounded-full px-2 p-2 shadow-xl">
                <p className='flex items-center gap-2'>
                    <span>
                        <FiBriefcase />
                    </span>
                    Jobs</p>
            </div>
            <div className="md:flex items-center space-x-5 md:visible hidden border rounded-full p-3">
                <p className='flex items-center gap-1'><span><FiMessageSquare /></span> Messages</p>
                <p className='flex items-center gap-1'><span><RiHandCoinLine /></span> Payments</p>
                <p className='flex items-center gap-1'><span><GoPeople /></span> Application</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <BiBell className='size-6'/>
            <div className="flex items-center gap-1">
                <span className='p-2 bg-blue-700 rounded-full'>
                <FaAtlassian className='text-white'/>
                </span>
                <MdArrowDropDown />
            </div>
        </div>
    </div>
  )
}

export default Navbar