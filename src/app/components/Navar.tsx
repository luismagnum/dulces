'use client'
import  Link from 'next/link'
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Image from 'next/image'
import { useState } from "react";

 

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }

  
  return (
    <div className='w-full'>
      <div>
        <div className='flex flex-row justify-between p-1 md:px-25 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <Image src='/dona.png' alt='' width={80} height={80}/>
                </span>
                <h1 className='text-xl font-semibold'>Sweet Shop</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8 mr-4'>
                <Link 
                 href='/'
                  className='hover:text-teal-500 transition-all cursor-pointer'>
                 Home
                 </Link>
                <Link
                 href='menu'
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Productos
                 </Link>
                <Link
                href='services'
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Servicios
                </Link>
                <Link
                 href='Survey' 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Dulces ligth
                 
                </Link>
               
            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-accent text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link
                 href='/home'
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home 
                 
                 </Link>
                 <Link
                 href='menu'
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Productos
                 
                 </Link>
                <Link
                 href='services'
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Servicios
                 
                </Link>
                <Link
                 href='menu' 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Dulces Light
                 
                </Link>
                
        </div>
      </div>
    </div>
  )
}

export default Navbar



