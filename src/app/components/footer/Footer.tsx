import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer()  {
  return (
    <div className='container lg:pt-40'>
        <div className='grid md:grid-cols-3 gap-16'>
            <div className='space-y-3'>
                <h2 className='text-xl font-bold'>Acerca de nosotros</h2>
                <p className='leading-[1.8]'>
                La pastelería <span className='text-accent'>Sweet Shop</span> no solo es la mejor de la ciudad,
                sino que también es un verdadero paraíso para los aficionados a la repostería. 
                Su dedicación a la calidad, la creatividad y el sabor es evidente en cada aspecto
                de su oferta, convirtiéndola en un destino imprescindible para todos los amantes
                del dulce.
                </p>
            </div>
            <div className='space-y-5'>
                <h2 className='text-xl font-bold'>Pasteleria</h2>
            <ul className='space-y-2'>
                <li>Nosotros</li>
                <li>Eventos</li>
                <li>Dulces</li>
                <li>Bebidas</li>
                <li>Salados</li>
                <li>Contactos</li>
            </ul>
        </div>
        <div>
            <div className='flex gap-8 text-accent text-2xl pt-16'>
            <FaFacebook />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            </div>
        </div>
        <br></br>
    </div>
     <div className='text-center justify-center font-bold'>Software Developer Luis E diaz</div>
     <br></br>
    </div>
  )
}
