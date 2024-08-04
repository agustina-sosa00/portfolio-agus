import React from 'react'
import instagram from '../../assets/instagram-brands-solid.svg'
import whatsapp from '../../assets/whatsapp-brands-solid.svg'
import linkedin from '../../assets/linkedin-brands-solid.svg'
import github from '../../assets/github-brands-solid.svg'

export const Iconos: React.FC = () => {
  return (
    <div className='w-2/3 h-full flex justify-evenly items-center'>
        <img src={linkedin} alt="" className='w-[30px] h-[30px]'/>
        <img src={github} alt=""  className='w-[30px] h-[30px]'/>
        <img src={whatsapp} alt=""  className='w-[30px] h-[30px]'/>
        <img src={instagram} alt=""  className='w-[30px] h-[30px]'/>
    </div>
  )
}
