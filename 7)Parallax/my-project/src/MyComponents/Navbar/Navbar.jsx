import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    let [navState, setNavState]= useState(false)
  return (
    
    <div className=' min-w-full flex justify-between px-10 items-center py-4 absolute'>
        <h1 className='text-4xl font-bold text-white cursor-pointer z-50'>Logo</h1>
        <ul className='hidden md:flex justify-between items-center gap-x-6 text-white text-lg'>
            <li className='bg-blue-400 px-4 py-2 rounded-xl cursor-pointer'>Home</li>
            <li className='hover:bg-blue-400 px-4 py-2 rounded-xl cursor-pointer'>Servies</li>
            <li className='hover:bg-blue-400 px-4 py-2 rounded-xl cursor-pointer'>About</li>
            <li className='hover:bg-blue-400 px-4 py-2 rounded-xl cursor-pointer'>Contact</li>
           
        </ul>
        <div className='block md:hidden text-white text-3xl  cursor-pointer' onClick={()=>setNavState(!navState)}>

         
          {navState ? <IoClose />: <FaAlignJustify />  }
        
          <ul className={` ${navState ? 'fixed w-[80%] h-[70vh]  bg-black/30 right-0 top-[10.8%] duration-200 py-2 px-4 z-50' : '-right-96 fixed overflow-hidden' }`}>
            <li className='bg-blue-400 px-4 py-2 rounded-xl cursor-pointer my-1'>Home</li>
            <li className='hover:bg-blue-400 px-4 py-2 rounded-xl cursor-pointer my-1'>Servies</li>
            <li className='hover:bg-blue-400 px-4 py-2 rounded-xl cursor-pointer my-1'>About</li>
            <li className='hover:bg-blue-400 px-4 py-2 rounded-xl cursor-pointer my-1'>Contact</li>
           
        </ul>
          

        </div>
    </div>
  )
}

export default Navbar