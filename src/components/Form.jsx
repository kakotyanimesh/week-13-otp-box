import React, {useState} from 'react'
import { InputBox } from './Input'
import { Button } from './Buttons'
import { useNavigate } from 'react-router-dom'

const Form = ({placeholder, inputType, paraText, buttonText, routedLink, inputWidthSm, inputWidthmobile  }) => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(value.trim() === '') return alert('input is Empty')
        navigate(`/${routedLink}`)
    }
  return (
    <form onSubmit={onSubmit} className='space-y-7 flex flex-col justify-center items-center text-center'>
        <div className='space-y-7'>
            <p className='text-xs sm:text-sm text-[#657f9c]'>{paraText}</p>
            <InputBox placeholder={placeholder} inputWidthSm={inputWidthSm} inputWidthmobile={inputWidthmobile} type={inputType} onChange={(e) => setValue(e.target.value) }/>  
        </div>
        <button><Button Children={buttonText} isactive={value.trim() !== ''} /></button>
    </form>
  )
}

export default Form