import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className='container pt-6'>
        <div className='flex justify-between items-center'>
            <Image src='/dona.png' width={90} height={90} alt='Logo' />
            <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px]'>
                <Link href= '/'>Home</Link>
                <Link href= '/menu'>Productos</Link>
                <Link href= '/services'>Servicios</Link>
                <Link href='/surveys'>Dulces Ligth</Link>
                <button className='bg-accent text-white px-6 py-3 rounded-3xl'>Encargar</button>
            </ul>
            <IoMenu  className='md:hidden text-accent' size={30}/>
        </div>
    </div>
  )
}

export default Navbar