import React from 'react'
import { Logo } from '../Logo/Logo'
import { Iconos } from '../Iconos/Iconos'
import { Burger } from '../Burger/Burger'
import './Navbar.css'

export const Navbar:React.FC = () => {
  return (
    <div className='w-full h-[70px] flex justify-between items-center bg-white fixed top-0 z-30 shadow-lg'>
        <div className='w-[70%] md:w-[35%] h-full flex justify-start items-center'>
            <Logo/>
        </div>
        <div className=' hidden w-[40%] h-full  md:flex justify-evenly items-center'>
        <a href='#/'>
          <button className='font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]'>Home</button>
          </a>

          <a href='#/about'>
          <button className='font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]'>Sobre Mi</button>
          </a>

          <a href='#/projects'>
           <button className='font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]'>Proyectos</button>
           </a>
           
        </div>
        <div className='hidden w-[25%] h-full md:flex justify-center items-center'>
            <Iconos/>
        </div>
        <div className='w-[30%] h-full flex justify-center items-center md:hidden'>
          <Burger/>
        </div>
    </div>
  )
}
