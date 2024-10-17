import React from 'react'
import logo from '../../assets/logoAgus.png'

export const Logo:React.FC = () => {
  return (
    <div className='w-[180px] h-[70px] ml-11'>
        <img src={logo} alt="" className='h-full'/>
    </div>
  )
}
