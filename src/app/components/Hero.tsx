import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative min-h-screen '>
       <Image className="lg:w-[680px] xl:w-[820px] h-auto absolute right-0 top-0 -z-10" 
       src="/banner-1.png"
        width={1000}
        height={600} 
        alt='banner png'/>
    <Navbar />

    <div className='container h-[calc(90vh-90px)] grid items-center mt-0'>
       <div className='space-y-4 bg-[#ffffff98] w-fit p-4 sm:mt-0'>
        <p className='uppercase font-medium'>Su mejor Opcion</p>
        <h2 className='text-4xl sm:text-6xl font-bold'>
         <span className='text-primary'>Sweet</span><span className='text-accent'>Shop</span>
        </h2>
        <p className='text-gray-700 text-[14px] sm:text-[16px]'>Deliciosos dulces.<br/>
         estan esperando por ti</p>
         <button className='bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]'>Encargar</button>
       </div>
    </div>
    </div>
  )
}

export default Hero