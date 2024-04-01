'use client'
import Link from 'next/link'        
import Hero from './Hero/page'
import Image from 'next/image';


export default function Home() {
  return (
  <div >
    <nav className='md:flex flex-row text-center items-center text-lg font-medium gap-8 ml-4 mr-4 '>
     <Link href='/Feature' className='hover:text-accent'> Productos/ </Link>
     <Link href='/Servicios' className='hover:text-accent'> Servicios/ </Link>
     <Link href='/Menu' className='hover:text-accent'> Menu/ </Link>
     <Link href='/Survey' className='hover:text-accent'> Dulces/</Link>
     </nav>
     <Hero />
  </div>
   );
};
