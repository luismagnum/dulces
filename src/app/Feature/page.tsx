import React from 'react'
import  Link from 'next/link'
import Dash from '../components/Dash'
import Image from 'next/image'

export default function Feature() {
  return (
    <>
    <Link href='/' className='m-4 font-bold'>Home</Link>
    <div className='container pt-10 sm:mt-2 mb-10'>
        <h2 className='text-6xl font-bold'>Nuestros</h2>
        <h2 className='text-6xl font-bold pt-2'>
        Dulces  <span className='text-accent'>tipicos</span>
        </h2>
        <p className='max-w-[550px] pt-10 text-gray-700'>
        La pastelería <span className='text-accent font-bold'>Sweet Shop</span> es una verdadera joya oculta 
        en el corazón de la ciudad. Desde el momento en que entras 
        por la puerta, te envuelve un aroma embriagador de dulzura y
        frescura que te transporta a un mundo de delicias irresistibles.
        </p>
        <Dash />
        <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
        <div className='w-fit mx-auto self-end'>
        <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
            src='/banner-2.png' width={300} height={600} alt='grid image'/>
        <div className='space-y-4'>
        <Dash />
        <h2 className='font-medium text-xl'>Mas Dulces</h2>
        <p className='text-gray-700 text-[14px] xl-text-[16px]'>
        Los dulces, esos pequeños trozos de felicidad envueltos en azúcar,
         han sido durante mucho tiempo los compañeros de juego preferidos 
         de los niños en todo el mundo.  
        </p>
        </div>  
        </div>

        <div className='w-fit mx-auto'>
        <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
            src='/banner-3.png' width={300} height={700} alt='grid image'/>
        <div className='space-y-4'>
        <Dash />
        <h2 className='font-medium text-xl'>Mas Dulces</h2>
        <p className='text-gray-700 text-[14px] xl-text-[16px]'>
        Imagina a un niño con los ojos brillantes y la sonrisa radiante,
         sus manos ansiosas por alcanzar un caramelo,
        </p>
        </div>  
        </div>
        <div className='w-fit mx-auto self-end'>
        <Image className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
            src='/banner-4.png' width={300} height={600} alt='grid image'/>
        <div className='space-y-4'>
        <Dash />
        <h2 className='font-medium text-xl'>Mas Dulces</h2>
        <p className='text-gray-700 text-[14px] xl-text-[16px]'>
        Los dulces no son solo una delicia para el paladar.
         Los recuerdos de pasar tardes enteras explorando el sabor de
         los dulces son tesoros que perduran en la memoria de muchos.
        </p>
        </div>  
        </div>
    </div>
    </div>
  </>
  )
}
