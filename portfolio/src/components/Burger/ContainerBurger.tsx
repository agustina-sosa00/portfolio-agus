import React from 'react'

export const ContainerBurger: React.FC = () => {
  return (
    <div className='w-full h-[300px]'>
        <button className='font-parrafo text-2xl text-sky-900'>Home</button>
        <button className='font-parrafo text-2xl text-sky-900'>Sobre Mi</button>
        <button className='font-parrafo text-2xl text-sky-900'>Proyectos</button>
    </div>
  )
}
