import React from 'react'
import Dash from '../components/Dash'
import Image from 'next/image'
import Link from 'next/link'

export default function Servicios() {
  return (
    <>
    <Link href='/' className='m-4 font-bold'>Home</Link>
    <div className='container pt-30 mb-10'>
        <div className='space-y-4 w-fit mx-auto text-center'>
        <h2 className='text-6xl font-bold'>
         Nuestros  <span className='text-accent'>Servicios</span>
        </h2>

        <p className=' text-gray-700'>
            Ademas en nuestras instalaciones contamos con 
        <br/>
            un amplio rango de servicios para hacer de su 
            estadia, un momento agradable y seguro.
        </p>
        <div className='w-fit mx-auto'>
        <Dash />
        </div>
        </div>
    <div className='grid gap-10 md:grid-cols-3 md:gap-4 pt-8'>
        <div className='space-y-3 text-center'>
          <Image className="mx-auto" src="/wifi.png" alt="banner" width={70} height={70}/>
          <p className='font-bold'>Wifi</p>
          <p>En nuestras instalaciones cuentas 
            con una  red WiFi de alta velocidad.
          </p>
        </div>
        <div className='space-y-3 text-center'>
          <Image className='mx-auto' src='/dely.png' alt="banner" width={90} height={90}/>
          <p className='font-bold'>Delivery</p>
          <p>Contamos con un servicio propio de envios
            a domicilio por parte del restaurante.
          </p>
        </div>
        <div className='space-y-3 text-center'>
          <Image className='mx-auto' src='/parque.png' alt='banner' width={70} height={70}/>
          <p className='font-bold'>Parque infantil</p>
          <p>Estamos orgullosos de tener un parque infantil 
            donde los niños pueden disfrutar alegremente.
          </p>
        </div>
    </div>
    </div>
    </>
  )
}
