import React from 'react'
import logo from '../assets/logo.png'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={logo} alt="" className='mt-20' />
        <Outlet/>
    </div>
  )
}

export default Layout