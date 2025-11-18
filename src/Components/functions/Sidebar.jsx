import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const navigate =useNavigate()

    let homeClick=()=> {
        navigate('/');
    }
  return (
    <div>
        <div className='mt-5 ml-8'>
            <p className='text-xl font-bold text-left pb-8 cursor-pointer'>Catagories</p>
            <p className='text-xl font-bold text-left pb-8 cursor-pointer' onClick={homeClick}>Home</p>
            <p className='text-xl font-bold text-left pb-8 cursor-pointer'>Movies</p>
            <p className='text-xl font-bold text-left pb-8 cursor-pointer'>Animation</p>
            
        </div>
    </div>
  )
}
