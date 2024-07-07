import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideNav,Navbar, DeficiencyModal } from '../../hooks/links'
import { useState } from 'react'

function MainLayout() {
  const [isShowSideNav, setIsShowSideNav] = useState(false);
  return (
    <main className='w-full h-screen flex flex-row'>
        <DeficiencyModal/>
        
        <SideNav 
          isShowSideNav={isShowSideNav}
          setIsShowSideNav={setIsShowSideNav}
        />
        <section className='flex-1 overflow-auto'>
            <Navbar
              isShowSideNav={isShowSideNav}
              setIsShowSideNav={setIsShowSideNav}
            />
            <div className='p-5 mt-20'>
              <Outlet/>
            </div>
        </section>
    </main>
  )
}

export default MainLayout