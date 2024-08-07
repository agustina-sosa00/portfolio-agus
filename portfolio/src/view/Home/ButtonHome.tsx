import React from 'react'
import './Home.css'

export const ButtonHome: React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative z-10 top-[20px]'>
        <button className='w-[150px] h-[40px] lg:w-[200px] lg:h-[50px] bg-[#FFB3C1] estiloDoradoBoton'>Proyectos</button>
    </div>
  )
}
