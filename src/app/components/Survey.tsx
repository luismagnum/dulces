import React from 'react'
import Image from 'next/image'

const Survey = () => {
  return (
    <div className='container pt-40'>
        <div className='grid lg:grid-cols-[50%,1fr] gap-20'>
            <div>
                <Image
                src='/survey.png'
                width={1000}
                height={600}
                alt='survey'/>
            </div>
            <div className='self-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>Dulces</h2>
            <h2 className='text-4xl md:text-6xl font-bold pt-3'>
             Preparados con  <span className='text-accent'>Edulcorantes</span>
            </h2>
            <p className='text-gray-700 pt-16'>
            Los dulces elaborados con edulcorantes son una alternativa popular 
            para aquellos que desean reducir su consumo de azúcar o que tienen 
            restricciones dietéticas, como personas con diabetes o aquellos que 
            buscan mantener un estilo de vida más saludable. Los edulcorantes, 
            como la stevia, la sucralosa y el xilitol, se utilizan en lugar
            del azúcar para endulzar los alimentos y bebidas. 
            </p>
            </div>
        </div>
    </div>
  )
}

export default Survey