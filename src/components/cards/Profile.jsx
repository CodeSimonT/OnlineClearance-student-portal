import React from 'react'
import { MdVerified } from "../../hooks/icons";
import { Tooltip } from "flowbite-react";

function Profile() {
  return (
    <div className='bg-maroon h-24 text-white p-3 flex flex-col items-start justify-end overflow-auto text-wrap break-all'>
        <h1 className='text-lg font-medium'>Jay Ar Nava</h1>
        <div className='flex items-center gap-1'>
            <h1 className='text-sm'>Information Technology</h1>
            <Tooltip content="Enrolled">
                <span className='cursor-pointer'>
                    <MdVerified/>
                </span>
            </Tooltip>
        </div>
    </div>
  )
}

export default Profile