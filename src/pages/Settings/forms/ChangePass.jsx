import React from 'react'
import { TextInput,Checkbox,Label } from "flowbite-react";
import { FaLock } from '../../../hooks/icons'

function ChangePass() {
    return (
        <div className="w-full mt-5">
            <div>
                <TextInput 
                    id="password" 
                    className='focus:ring-maroon focus:border-none focus:outline-none'
                    type="password" 
                    icon={FaLock} 
                    placeholder="Password" 
                    required 
                />
                <TextInput 
                    id="confirmPass" 
                    className='mt-5'
                    type="password" 
                    icon={FaLock} 
                    placeholder="Confirm password" 
                    required 
                />
            </div>
            <div className='mt-5 flex flex-row items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        Change password
                    </Label>
                </div>
                <div className='flex items-center gap-1'>
                    <button className='bg-maroon px-4 py-1 text-white rounded-sm drop-shadow-md'>
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangePass