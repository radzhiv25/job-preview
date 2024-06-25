import React from 'react'

const Features = () => {
  return (
    <div className='min-w-screen px-20 p-3 flex flex-row items-center space-x-10 border-b text-gray-500 md:text-xl text-sm overflow-hidden '>
        <div className="text-orange-500">
            <p>Job Preview</p>
            <hr className="h-1 w-1/2 mx-auto bg-orange-500 relative translate-y-3"/>
        </div>
        <div className="">
            <p>Applicants</p>
        </div>
        <div className="">
            <p>Match</p>
        </div>
        <div className="">
            <p>Messages</p>
        </div>
    </div>
  )
}

export default Features