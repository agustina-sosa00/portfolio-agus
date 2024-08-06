import React from 'react'
import './Home.css'

export const Home:React.FC = () => {
  return (
    <div className='w-full min-h-screen bgHome flex justify-center items-center'>
      <div className='w-4/5 h-[450px] estiloDorado flex justify-center items-center'>
      <div className='w-2/3 h-[250px] bgSubCaja flex flex-col justify-center items-center'>
        <h2 className='text-'>Bienvenidos </h2>
          <h3>soy</h3>
          <h1>Agustina Sosa</h1>
          <h2>Desarrolladora web</h2>
      </div>
      </div>
    </div>
  )
}
