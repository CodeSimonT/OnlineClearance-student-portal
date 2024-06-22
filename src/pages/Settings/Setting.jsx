import React from 'react'
import { IoIosSettings,FaLock,MdEmail } from '../../hooks/icons'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Setting() {
    const location = useLocation();

    return (
        <div className='border-2 rounded-md'>
            <div className="w-full bg-maroon flex flex-col rounded-t-md p-3">
                <div className='flex items-center gap-2 text-white text-xl'>
                    <span className='text-2xl'>
                        <IoIosSettings/>
                    </span>
                    <h1 className='font-medium'>
                        Settings
                    </h1>
                </div>
            </div>
            <div className='flex item-center gap-10 mt-3 px-3 relative w-full overflow-auto py-2'>
                <div className="flex items-center gap-2 text-maroon uppercase font-medium min-w-36">
                    <span>
                        <MdEmail/>
                    </span>
                    <Link 
                        to='/settings'
                    >
                        Change Email
                    </Link>
                </div>
                <div className="flex items-center gap-2 text-maroon uppercase font-medium min-w-48">
                    <span>
                        <FaLock/>
                    </span>
                    <Link 
                        to='/settings/change-email'
                    >
                        Change Password
                    </Link>
                </div>
                <div className={`h-1 border-b-2 border-maroon absolute bottom-0 ${location.pathname === '/settings' ? 'translate-x-0 w-36':'translate-x-44 w-48'} transition-all duration-300`}></div>
            </div>
            <div className='p-3'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Setting