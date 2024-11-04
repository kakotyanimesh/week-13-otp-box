import React from 'react'
import Form from '../components/Form'

const Email = () => {
  return (
    <div className='pt-10 flex-col justify-center items-center text-center space-y-[40px]'>
        <h1 className='font-bold'>Lets Gets Started </h1>
        <Form placeholder='Email Id' inputType='email' inputWidthSm='w-[250px]' inputWidthmobile='w-48' buttonText='continue' routedLink='otp'/>
        
    </div>
  )
}

export default Email