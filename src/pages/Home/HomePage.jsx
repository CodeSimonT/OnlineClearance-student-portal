import React, { useEffect } from 'react'
import { ActiveClearanceTable, cookie, axios, Spinner, fetchUserData } from '../../hooks/links'
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

  const userDataQuery = useQuery({
    queryKey:['department'],
    queryFn: fetchUserData
  })

  const formatTerm = (term,academicLevel) => {
    const syStart = 2000 + parseInt(term.slice(0, 2)); // Get the starting school year
    const syEnd = syStart + 1; // Calculate the ending school year
    const trimester = term[2]; // Get the trimester

    let trimesterText = '';

    if(academicLevel === 'College'){
      switch (trimester) {
        case '1':
          trimesterText = '1st trimester';
          break;
        case '2':
          trimesterText = '2nd trimester';
          break;
        case '3':
          trimesterText = '3rd trimester';
          break;
        default:
          trimesterText = '';
      }
    }else{
      switch (trimester) {
        case '1':
          trimesterText = '1st semester';
          break;
        case '2':
          trimesterText = '2nd semester';
          break;
        default:
          trimesterText = '';
      }
    }
  
    return `S/Y ${syStart}-${syEnd} (${trimesterText})`;
  };

  useEffect(()=>{

    const handleGetCookie = async() =>{
      await getCookie();
    }
    handleGetCookie();

  },[])

  useEffect(()=>{
    if(isError){
      return (
        <div>
          <p>Something went wrong</p>
        </div>
      )
    }
  },[isError])


  return (
    <div>
        <div className="w-full bg-maroon flex items-center justify-between rounded-t-md p-3">
          <div>
            <h1 className='text-2xl text-white font-medium'>Active Clearance</h1>
            <h2 className='text-white text-[12px]'>
              {
                isLoading ?
                  (
                    null
                  ):(
                    formatTerm(data.term,userDataQuery.data.academicLevel)
                  )
              }
            </h2>
          </div>
          <div className='uppercase flex items-center gap-1 text-white text-[12px] font-medium'>
              {
                isLoading ?
                (
                  null
                ):(
                  data?.status === 'Closed' ?
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

      {
        !isLoading ?
        (
          data.requiredDepartments.every(department => department.status === 'Completed') && (
            <div className='mt-5 flex items-center justify-end'>
              <button className='bg-gray-200 px-5 py-2 rounded-sm text-gray-700'>
                Print clearance
              </button>
            </div>
          )
        ):(null)
      }
    </div>
  )
}

export default HomePage