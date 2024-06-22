import React, { useState } from 'react'
import { IoSearchSharp } from '../../hooks/icons'
import { ClearanceListTable } from '../../hooks/links'
import { Pagination } from "flowbite-react";

function ClearanceList() {
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (number) => setCurrentPage(number);
    return (
        <div>
            <div className="w-full bg-maroon flex flex-col rounded-t-md p-3">
                <div>
                    <h1 className='text-white font-medium text-2xl'>Clearance List</h1>
                </div>
                <div className='flex items-center w-full bg-white my-3 rounded-sm'>
                    <input 
                        type='text'
                        className='w-full bg-transparent border-none focus:outline-none focus:ring-transparent'
                        placeholder='Search'
                    />
                    <span className='text-xl px-2 text-maroon'>
                        <IoSearchSharp/>
                    </span>
                </div>
            </div>
            <div>
                <ClearanceListTable/>
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
                </div>
            </div>
        </div>
    )
}

export default ClearanceList