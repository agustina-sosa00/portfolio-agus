import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

export const Iconos: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center  items-center gap-4 lg:gap-6">
      <a href="#">
        <FaLinkedinIn className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-[#77530a] hover:scale-110 duration-500 " />
      </a>
      <a href="#">
        <FiGithub className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-[#77530a] hover:scale-110 duration-500" />
      </a>
      <a href="#">
        <FaWhatsapp className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-[#77530a] hover:scale-110 duration-500" />
      </a>
    </div>
  );
};
