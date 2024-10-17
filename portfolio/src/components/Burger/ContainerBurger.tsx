import React from 'react'
import { Iconos } from '../Iconos/Iconos'

export const ContainerBurger: React.FC = () => {
  return (
    <div className='w-1/2 h-[300px] flex flex-col justify-evenly items-center bg-white  fixed z-50 mt-0 right-0'>
      <a href='#/'>
        <button className='font-parrafo text-2xl  text-[#77530a] hover:border-b-2 hover:border-[#77530a]'>Home</button>
      </a>
      <a href='#/about'>
        <button className='font-parrafo text-2xl  text-[#77530a] hover:border-b-2 hover:border-[#77530a]'>Sobre Mi</button>
      </a>
      <a href='#/projects'>
        <button className='font-parrafo text-2xl  text-[#77530a] hover:border-b-2 hover:border-[#77530a]'>Proyectos</button>
      </a>
        <div className='w-full flex justify-center items-center'>
          <Iconos/>
        </div>
    </div>
  )
}
