import React, { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import { LiaClipboardListSolid, MdPlaylistRemove, IoIosSettings, ImExit } from '../../hooks/icons'
import Profile from '../cards/Profile';

function SideNav({isShowSideNav, setIsShowSideNav}) {
    const navRef = useRef();

    const handleGetCurrentYear =()=>{
        const date = new Date();
        const year = date.getFullYear();

        return year;
    }

    const handleCloseNav =()=>{
        setIsShowSideNav(false)
    }

    useEffect(()=>{
        const handleClickOutside =(event)=> {
            if (navRef.current && !navRef.current.contains(event.target)) {
                handleCloseNav()
            }
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleCloseNav()
            }
        };

        if (isShowSideNav) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })

    return (
        <div 
            ref={navRef} 
            className={`h-full w-56 flex flex-col border-r overflow-auto max-xl:fixed max-xl:bg-white max-xl:z-20 ${isShowSideNav ? '':'max-xl:-translate-x-60'} transition-all duration-300 min-h-[400px]`}
        >
            <Profile/>
            <div className='w-full flex flex-col items-start p-2 h-full'>
                <NavLink 
                    to='/'
                    className={({isActive}) => isActive ? "inline-flex items-center bg-red-200 text-red-500 text-sm font-medium px-2.5 py-3 rounded-sm w-full":"inline-flex items-center hover:bg-gray-400 hover:bg-opacity-10 text-sm font-medium px-2.5 py-3 rounded-sm w-full text-gray-500"}
                    onClick={handleCloseNav}
                >
                    <span className='me-5'>
                        <LiaClipboardListSolid/>
                    </span>
                    Active Clearance
                </NavLink>
                <NavLink 
                    to='/clearance-list'
                    className={({isActive}) => isActive ? "inline-flex items-center bg-red-200 text-red-500 text-sm font-medium px-2.5 py-3 rounded-sm w-full":"inline-flex items-center hover:bg-gray-400 hover:bg-opacity-10 text-sm font-medium px-2.5 py-3 rounded-sm w-full text-gray-500"}
                    onClick={handleCloseNav}
                >
                    <span className='me-5'>
                        <LiaClipboardListSolid/>
                    </span>
                    Clearance List
                </NavLink>
                <NavLink 
                    to='/settings'
                    className={({isActive}) => isActive ? "inline-flex items-center bg-red-200 text-red-500 text-sm font-medium px-2.5 py-3 rounded-sm w-full":"inline-flex items-center hover:bg-gray-400 hover:bg-opacity-10 text-sm font-medium px-2.5 py-3 rounded-sm w-full text-gray-500"}
                    onClick={handleCloseNav}
                >
                    <span className='me-5'>
                        <IoIosSettings/>
                    </span>
                    Settings
                </NavLink>
                <button className='inline-flex items-center bg-opacity-50 hover:bg-gray-400 hover:bg-opacity-10 text-sm font-medium px-2.5 py-3 rounded-sm w-full text-gray-500'>
                    <span className='me-5'>
                        <ImExit/>
                    </span>
                    Logout
                </button>

            </div>
            <div className='text-sm w-full p-2'>
                <p className='text-sm text-gray-400'>
                    2023 - {handleGetCurrentYear()} &copy; <span className='font-medium'>Jay Ar Nava, AMACC Naga</span>
                </p>
            </div>
        </div>
    )
}

export default SideNav