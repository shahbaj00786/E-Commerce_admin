import React from 'react'
import { assets } from '../assets/assets'

export const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[10%]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-gray-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full hover:cursor-pointer hover:bg-gray-700 '>Logout</button>
    </div>
  )
}
