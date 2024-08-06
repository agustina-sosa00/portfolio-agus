import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

export const Iconos: React.FC = () => {
  return (
    <div className='w-2/3 h-full flex justify-evenly items-center'>
      <a href="#"><FaLinkedinIn className='w-[30px] h-[30px] text-[#77530a] hover:text-gray-600'/></a>
      <a href="#"><FiGithub className='w-[30px] h-[30px] text-[#77530a] hover:text-gray-600'/></a>
      <a href="#"><FaWhatsapp className='w-[30px] h-[30px] text-[#77530a] hover:text-gray-600'/></a>
    </div>
  )
}
