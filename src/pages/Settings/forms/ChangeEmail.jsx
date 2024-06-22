import React from 'react'
import { TextInput,Checkbox,Label } from "flowbite-react";
import { MdEmail } from '../../../hooks/icons'

function ChangeEmail() {
    return (
        <div className="w-full mt-5">
            <div>
                <TextInput 
                    id="email4" 
                    className='focus:ring-maroon focus:border-none focus:outline-none'
                    type="email" 
                    icon={MdEmail} 
                    placeholder="name@gmail.com" 
                    required 
                />
            </div>
            <div className='mt-5 flex flex-row items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        Change email
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

export default ChangeEmail