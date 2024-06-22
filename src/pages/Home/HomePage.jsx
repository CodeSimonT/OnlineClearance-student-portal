import React from 'react'
import { ActiveClearanceTable } from '../../hooks/links'

function HomePage() {
  return (
    <div>
        <div className="w-full bg-maroon flex items-center justify-between rounded-t-md p-3">
          <div>
            <h1 className='text-2xl text-white font-medium'>Active Clearance</h1>
            <h2 className='text-white text-[12px]'>S/Y 2023-2024 (1st trimester)</h2>
          </div>
          <div className='uppercase flex items-center gap-1 text-white text-[12px] font-medium'>
              <span className="inline-flex items-center bg-orange-300 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-24">
                  <span className="w-2 h-2 me-1 bg-orange-500 rounded-full"></span>
                  On-going
              </span>
          </div>
        </div>
        <ActiveClearanceTable/>
    </div>
  )
}

export default HomePage