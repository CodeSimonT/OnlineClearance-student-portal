import React, { useEffect, useRef, useState } from 'react'
import { axios, cookie, deficiencyModalStore, Spinner } from '../../hooks/links'
import { useQuery } from '@tanstack/react-query';

function DeficiencyModal() {
    const {clearanceID,showDeficiencyModal,department,deficiencyModalSetter} = deficiencyModalStore();
    const {token,getCookie} = cookie();

    const modalRef = useRef(null);

    const env = import.meta.env;
    const serverURL = env.VITE_REACT_SERVER_URL;

    const query = useQuery({
        queryKey:['studentDeficiency'],
        queryFn: async()=>{
            const {data} = await axios.get(`${serverURL}/osc/api/get/studentdeficiency`,{
                headers:{
                    Authorization:token
                },
                params:{
                    id:clearanceID
                }
            })
            const def = data.find(data => data.departmentName === department)

            return def;
        }
    })

    const handleClose = () =>{
        deficiencyModalSetter(false,null, null)
    }

    useEffect(() => {

        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose()
            }
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose()
            }
        };

        if (showDeficiencyModal) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [clearanceID,showDeficiencyModal,department]);

    useEffect(()=>{

        const handleGetCookie = async()=>{
            await getCookie();
        }
        handleGetCookie();

    },[])

    if(!clearanceID || !showDeficiencyModal || !department){
        return null;
    }
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20 z-20 flex items-center justify-center">
                <div ref={modalRef} className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 rounded-t bg-maroon">
                            <h3 className="text-xl font-semibold text-white uppercase">
                                Deficiencies
                            </h3>
                            <button onClick={handleClose} type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5">
                            {
                                query.isLoading ?
                                (
                                    <Spinner/>
                                ):(
                                    <>
                                        <div className='bg-gray-200 p-2 rounded-sm'>
                                            <h1 className='text-xl font-medium'>
                                                {query.data?.deficiency}
                                            </h1>
                                        </div>
                                        <div className='mt-3 bg-gray-200 h-36 overflow-auto p-2 rounded-sm'>
                                            <p>
                                                {query.data?.additionalInformation}
                                            </p>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div> 
    )
}

export default DeficiencyModal