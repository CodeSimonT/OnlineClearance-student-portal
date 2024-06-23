import React from 'react'
import { Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';

function LoginInputs() {
    return (
        <form className="flex flex-col gap-4 ">
            {/* <h1 className='font-bold text-2xl'>Login</h1> */}
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
                    required 
                />
            </div>
            <button 
                className='bg-maroon drop-shadow-md py-2 rounded-sm text-white' 
                type="submit"
            >
                Login
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