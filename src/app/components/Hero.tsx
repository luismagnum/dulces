import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import Navar from './Navar'
import Navb from './Navb'
import Dash from './Dash'

const Hero = () => {
  return (
    <div className='relative min-h-full '>
       <Image className="lg:w-[680px] xl:w-[820px] h-auto absolute right-0 top-10 -z-10" 
       src='/banner-1.png'
        width={1000}
        height={600} 
        alt='banner png'/>
      <Navar />
    <div className='container h-[calc(80vh-70px)] grid items-center mt-10 sm:mb-0'>
       <div className='space-y-6 w-fit p-4 sm:mt-4'>
      <Dash /> 
        <h2 className='text-4xl sm:text-6xl font-bold'>
         <span className='text-primary'>Sweet</span><span className='text-accent'>Shop</span>
        </h2>
        <p className='text-gray-700 text-[16px] sm:text-[18px]'>Deliciosos dulces.<br/>
         estan esperando por ti</p>
         <button className='bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]'>Encargar</button>
       </div>
      </div>
    </div>
  )
}

export default Hero