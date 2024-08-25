import React from 'react'
import './Home.css'
import { CardHome } from './CardHome'

export const Home:React.FC = () => {
  return (
    <div id='/' className='w-full min-h-screen bgHome flex justify-center items-center'>
      <div className='w-4/5 h-[350px] md:h-[450px] estiloDorado flex flex-col justify-center items-center'>
        <CardHome/>
      </div>
      
    </div>
  )
}
