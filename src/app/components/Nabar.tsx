import Image from "next/image"

export default function Nabar() {
    return (    
    <div className='flex flex-row items-center cursor-pointer'>
    <span>
        <Image src='/dona.png' alt='' width={80} height={80}/>
    </span>
        <h1 className='text-xl font-semibold'>Sweet Shop</h1>
    </div>
    )
}
