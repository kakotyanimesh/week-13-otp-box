import React, { useRef } from 'react'
import Form from '../components/Form'

const Otp = () => {
    const ref = useRef()
  return (
    <div>
        <h1 className='font-bold'>Check Your Email for OTP </h1>
        <div>
           <OtpInput/> 
        </div>
        
    </div>
  )
}


const OtpInput = () => {
    return (
        <input type="text" className='w-[30px] h-[30px] rounded-lg bg-[#183e69] outline-none text-center ' />
    )
}

export default Otp