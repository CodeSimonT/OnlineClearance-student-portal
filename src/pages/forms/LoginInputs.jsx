import React, { useEffect, useState } from 'react'
import { Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ErrorToast, Spinner, SuccessToast, cookie } from '../../hooks/links';

function LoginInputs() {
    const navigate = useNavigate();
    const {setCookie} = cookie();
    const [credentials, setCredentials] = useState({
        usn:'',
        password:''
    })

    const env = import.meta.env;
    const serverURL = env.VITE_REACT_SERVER_URL;

    const mutation = useMutation({
        mutationFn: async (credential) => {

            const { data } = await axios.post(`${serverURL}/osc/api/loginStudent`,credential);
            console.log(data)
            await setCookie(data.userID,data.token)
            console.log('1')
            navigate('/')
            console.log('2')
            return data;
        }
    })

    const handleLogin = async(e)=>{
        e.preventDefault();

        if(!credentials.usn || ! credentials.password){
            return;
        }

        mutation.mutate(credentials)
    }
    
    useEffect(()=>{
        if(mutation.isError){
            console.log('error')
            ErrorToast(`${mutation?.error?.response?.data?.message}`)
        }else if(mutation.isSuccess){
            SuccessToast('Success')
        }
    },[mutation.isError,mutation.isSuccess])

    return (
        <form className="flex flex-col gap-4 ">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="usn" 
                        value="USN" 
                    />
                </div>
                <TextInput 
                    id="usn" 
                    type="number" 
                    placeholder="2100**43*10" 
                    value={credentials.usn}
                    onChange={(e)=>{setCredentials(prev => ({...prev, usn:e.target.value}))}}
                    required 
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput 
                    id="password1" 
                    type="password" 
                    placeholder='*************'
                    value={credentials.password}
                    onChange={(e)=>{setCredentials(prev => ({...prev, password:e.target.value}))}}
                    required 
                />
            </div>
            <button 
                className='bg-maroon drop-shadow-md py-2 rounded-sm text-white' 
                onClick={(e)=>{handleLogin(e)}}
            >
                {
                    mutation.isPending ?
                    (
                        <Spinner/>
                    ):('Login')
                }
            </button>
            <Link
                to="/form/forgotpassword"
                className='text-lg text-maroon text-center'
            >
                Forgot your password?
            </Link>
        </form>
    )
}

export default LoginInputs