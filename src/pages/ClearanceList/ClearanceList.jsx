import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from '../../hooks/icons'
import { axios, ClearanceListTable, cookie, Spinner } from '../../hooks/links'
import { Pagination } from "flowbite-react";
import { useQuery } from '@tanstack/react-query';

function ClearanceList() {
    const {userID,token,getCookie} = cookie();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const env = import.meta.env;
    const serverURL = env.VITE_REACT_SERVER_URL;

    const onPageChange = (number) => setCurrentPage(number);

    
    const historyQuery = useQuery({
        queryKey:['clearanceHistory'],
        queryFn: async()=>{
            const {data} = await axios.get(`${serverURL}/osc/api/get/clearanceHistory`,{
                headers:{
                    Authorization:token
                },
                params:{
                    id:userID,
                    page: currentPage,
                    limit: 10 
                }
            })

            setTotalPages(data.totalPages); 

            return data.requests;
        }
    })

    useEffect(()=>{
        const handleGetCookie =async()=>{
            await getCookie();
        }

        handleGetCookie();
    },[])
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
                {
                    historyQuery.isLoading ?
                    (
                        <div className='h-36 w-full flex items-center justify-center border-2 rounded-b-md'>
                            <Spinner/>
                        </div>
                    ):(
                        historyQuery.data.length > 0 ?
                        (
                            <ClearanceListTable
                                historyQuery = {historyQuery}
                            />
                        ):(
                            <div className='h-36 w-full flex items-center justify-center border-2 rounded-b-md'>
                                <p className='text-sm text-gray-600 font-medium'>No data</p>
                            </div>
                        )
                    )
                }
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination 
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        onPageChange={onPageChange} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ClearanceList