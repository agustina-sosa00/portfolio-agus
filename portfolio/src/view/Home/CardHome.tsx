import React from 'react'
import { ButtonHome } from './ButtonHome'

export const CardHome: React.FC = () => {
  return (
    <> 
    <div className='w-full h-[200px] md:w-2/3  lg:h-[250px] bgSubCaja flex flex-col justify-center items-center'>
            <h2 className='font-parrafo text-2xl lg:text-4xl text-[#C9184A] mt-5'>Bienvenidos </h2>
            <h3 className='font-parrafo text-lg lg:text-2xl text-[#C9184A]'>soy</h3>
            <h1 className='font-titulo1 text-5xl lg:text-8xl text-[#FF758F]'>Agustina Sosa</h1>
            <h2  className='font-parrafo text-2xl lg:text-3xl uppercase text-[#C9184A] tracking-wider'>Desarrolladora web</h2>
            <ButtonHome/>
        </div>
    
    </>
       
  
  )
}
