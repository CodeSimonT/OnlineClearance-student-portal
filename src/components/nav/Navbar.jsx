import React from 'react'
import { RxHamburgerMenu } from '../../hooks/icons'

function Navbar({isShowSideNav, setIsShowSideNav}) {
  return (
    <nav className='w-full flex p-2 items-center justify-between border-b max-[1100px]:fixed max-[1100px]:z-10 bg-white h-20 max-[1100px]:left-0 left-56 right-0'>
        <div className='flex items-center gap-5'>
            <button 
              className='font-medium text-xl max-[1100px]:block hidden'
              onClick={()=>{setIsShowSideNav(isShowSideNav ? false:true)}}
            >
                <RxHamburgerMenu/>
            </button>
            <div className='flex items-center gap-2 uppercase text-sm font-medium text-gray-500'>
              <h1>AMACC Naga OSC</h1>
              <div className='w-[1px] border-[1px] h-[35px] max-[530px]:hidden block'></div>
              <h1 className='max-[530px]:hidden block text-maroon'>Active Clearance</h1> 
            </div>
        </div>
        <div className='max-[530px]:hidden block'>
            <img 
                src='/logo.png'
                className='w-20'
            />
        </div>
    </nav>
  )
}

export default Navbar