import React from 'react'
import { GoPeople } from 'react-icons/go'
import { FiMessageSquare } from "react-icons/fi";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

const Status = () => {
  return (
    <div className='my-3 px-4'>
        <div className="flex items-center justify-between border-b py-4">
            <span className='flex items-center gap-2'>
            <GoPeople />
            Applicants
            </span>
            <p>400</p>
        </div>
        <div className="flex items-center justify-between border-b py-4">
            <span className='flex items-center gap-2'>
            <BsPersonCheckFill />
            Matches
            </span>
            <p>100</p>
        </div>
        <div className="flex items-center justify-between border-b py-4">
            <span className='flex items-center gap-2'>
            <FiMessageSquare />
            Messages
            </span>
            <p>147</p>
        </div>
        <div className="flex items-center justify-between py-4">
            <span className='flex items-center gap-2'>
            <IoEyeOutline />
            Views
            </span>
            <p>800</p>
        </div>
    </div>
  )
}

export default Status