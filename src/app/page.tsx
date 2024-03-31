'use client'
import Link from 'next/link'        
import Hero from './Hero/page'
import Image from 'next/image';


export default function Home() {
  return (
  <div >
    <nav className='md:flex flex-row text-center items-center text-lg font-medium gap-8 ml-4 mr-4 '>
     <Link href='/Feature'>Productos </Link>
     <Link href='/Servicios'>Servicios </Link>
     <Link href='/Menu'>Menu </Link>
     <Link href='/Survey'>Dulces</Link>
     </nav>
     <Hero />
  </div>
   );
};
