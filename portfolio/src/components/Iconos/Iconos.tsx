import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

export const Iconos: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full gap-4 lg:gap-6">
      <a
        href="https://www.linkedin.com/in/agustina-ayelen-sosa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-[#77530a] hover:scale-110 duration-500 " />
      </a>
      <a
        href="https://github.com/agustina-sosa00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-[#77530a] hover:scale-110 duration-500" />
      </a>
      <a
        href="https://wa.me/+5401165149673?text=Hola%20Agustina."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mb-1 sm:mb-0 "
      >
        <FaWhatsapp className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-[#77530a] hover:scale-110 duration-500" />
      </a>
    </div>
  );
};
