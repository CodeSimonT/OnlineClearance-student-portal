import React, { useEffect } from 'react'
import { ActiveClearanceTable, cookie, axios, Spinner } from '../../hooks/links'
import { useQuery } from '@tanstack/react-query';

function HomePage() {
  const {userID,token,getCookie} = cookie();

  const env = import.meta.env;
  const serverURL = env.VITE_REACT_SERVER_URL;

  const { data, isLoading, isError } = useQuery({
    queryKey:['activeTerm'],
    queryFn: async()=>{
      const { data } = await axios.get(`${serverURL}/osc/api/get/activeterm?userID=${userID}`,{
        headers:{
          Authorization:token
        }
      })
      return data;
    }
  })

  useEffect(()=>{

    const handleGetCookie = async() =>{
      await getCookie();
    }
    handleGetCookie();

  },[])

  console.log(data)
  return (
    <div>
        <div className="w-full bg-maroon flex items-center justify-between rounded-t-md p-3">
          <div>
            <h1 className='text-2xl text-white font-medium'>Active Clearance</h1>
            <h2 className='text-white text-[12px]'>S/Y 2023-2024 (1st trimester)</h2>
          </div>
          <div className='uppercase flex items-center gap-1 text-white text-[12px] font-medium'>
              {
                isLoading ?
                (
                  null
                ):(
                  data.status === 'Closed' ?
                  (
                    <span className="inline-flex items-center bg-red-300 text-red-800 text-xs font-medium px-4 py-0.5 rounded-full">
                        <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                        Closed
                    </span>
                  ):(
                    <span className="inline-flex items-center bg-orange-300 text-orange-800 text-xs font-medium px-4 py-0.5 rounded-full">
                        <span className="w-2 h-2 me-1 bg-orange-500 rounded-full"></span>
                        On-going
                    </span>
                  )
                )
              }
          </div>
        </div>
        {
          isLoading ?
          (
            <div className='h-32 flex items-center justify-center border-2 border-gray-100 rounded-b-md'>
              <Spinner/>
            </div>
          ):(
            <ActiveClearanceTable
                data = {data}
                serverURL = {serverURL}
                token = {token}
                userID = {userID}
            />
          )
        }
    </div>
  )
}

export default HomePage