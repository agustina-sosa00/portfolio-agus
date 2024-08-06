import React from 'react'

export const ContainerBurger: React.FC = () => {
  return (
    <div className='w-full h-[300px]'>
        <button className='font-parrafo text-2xl  text-[#77530a] hover:text-gray-600'>Home</button>
        <button className='font-parrafo text-2xl  text-[#77530a] hover:text-gray-600'>Sobre Mi</button>
        <button className='font-parrafo text-2xl  text-[#77530a] hover:text-gray-600'>Proyectos</button>
    </div>
  )
}
