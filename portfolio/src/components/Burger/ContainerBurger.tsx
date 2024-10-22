import React from "react";
import { Iconos } from "../Iconos/Iconos";
import { Link } from "react-scroll";

export const ContainerBurger: React.FC = () => {
  return (
    <div className="w-1/2 h-[300px] flex flex-col justify-evenly items-center bg-white  fixed z-50 mt-0 right-0">
      <Link to="home" smooth={true} duration={500}>
        <button className="font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]">
          Inicio
        </button>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <button className="font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]">
          Sobre mi
        </button>
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        <button className="font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]">
          Proyectos
        </button>
      </Link>
      <div className="flex items-center justify-center w-full">
        <Iconos />
      </div>
    </div>
  );
};
