import React, {useState} from 'react'
import Form from '../components/Form'

const Age = () => {
    return (
    <div className='pt-10 flex flex-col justify-center items-center space-y-[40px]'>
        <h1 className='font-bold'>Verify Your Age</h1>
        <Form inputWidthSm='w-[250px]' inputWidthmobile='w-48' placeholder='Enter Your Age' paraText='Please Confirm your age.Data will not be saved.' buttonText='continue' inputType='text' routedLink='email'/>
        
        
    </div>
  )
}

export default Age