import Image from 'next/image'
import React from 'react'
import Dash from '../components/Dash'

export default function Hero() {
  return (
    <div className='container pt-5 ml-2'>
      <div className='grid lg:grid-cols-[50%,1fr] gap-20'>
        <div>
       <Image  
       src='/banner-1.png'
        width={1000}
        height={600} 
        alt='banner png'/>
        </div>  
      
    <div className='self-center mt-[-50px]'>
       <div className=''>
      <Dash /> 
        <h2 className='text-5xl md:text-6xl font-bold p-6 ml-[-16px]'>
         <span className='text-primary'>Sweet</span><span className='text-accent'>Shop</span>
        </h2>
        <p className='text-gray-700 text-[18px] sm:text-[20px] mb-4'>Deliciosos dulces<br/>
         estan esperando por ti</p>
         <button className='bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]'>Encargar</button>
       </div>
      </div>
    </div>
   </div>
  )
}
