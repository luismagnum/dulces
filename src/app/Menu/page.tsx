import React from 'react'
import Dash from '../components/Dash'
import Image from 'next/image'
import Link from 'next/link'


export default function Menu() {
  return (
    <>
    <Link href='/' className='m-4 font-bold'>Home</Link>
    <div className='container pt-40'>
        <div className='space-y-4 w-fit mx-auto text-center'>
        <h2 className='text-6xl font-bold'>
         Nuestro <span className='text-accent'>Menu</span>
        </h2>
        <p className=' text-gray-700'>
        Nuestros chocolates son una indulgencia sin remordimientos, con una textura suave
         y un sabor rico y satisfactorio que te dejará deseando más.
        <br/>
        Nuestras galletas son crujientes por fuera y suaves por dentro, con sabores que 
         van desde clásicos como la vainilla y el chocolate hasta combinaciones más 
         atrevidas como nueces y frutas secas. Cada mordisco está lleno de sabor, pero 
         con menos calorías que las galletas tradicionales.   
            
        </p>
        <div className='w-fit mx-auto'>
        <Dash />
        </div>
        </div>
    <ul className='mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto'>
        <li className='bg-accent text-white p-1'>Variedades</li>
        <li>Dulces</li>
        <li>Salados</li>
        <li>Meriendas</li>
        <li>Bebidas</li>
    </ul>
    <div className='grid gap-10 md:grid-cols-3 md:gap-4 pt-8'>
        <div className='space-y-3 text-center'>
          <Image className="mx-auto" src="/dulceuno.png" alt="banner" width={200} height={200}/>
          <p className='font-bold'>Wrapes con dulce leche</p>
          <p>La porcion $3000 
          </p>
        </div>
        <div className='space-y-3 text-center'>
          <Image className="mx-auto" src="/dulcedos.png" alt="banner" width={200} height={200}/>
          <p className='font-bold'>Choco torta</p>
          <p>La porcion $3000
          </p>
        </div>
        <div className='space-y-3 text-center'>
          <Image className="mx-auto" src="/dulcetres.png" alt="banner" width={200} height={200}/>
          <p className='font-bold'>Cañitos de dulce leche</p>
          <p>La porcion $3000 
          </p>
        </div>
    </div>
    </div>
    </>
    
  )
}
