import React from "react";
import { Logo } from "../Logo/Logo";
import { Iconos } from "../Iconos/Iconos";
import { Burger } from "../Burger/Burger";
import "./Navbar.css";
import { Link } from "react-scroll";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full h-[70px] flex justify-between items-center bg-white fixed top-0 z-30 shadow-lg">
      <div className="flex items-center justify-center w-2/3 h-full md:w-1/4">
        <Logo />
      </div>
      <div className="items-center justify-center hidden h-full gap-8  md:w-1/2 md:flex">
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
        <Link to="experience" smooth={true} duration={500}>
          <button className="font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]">
            Experiencia
          </button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <button className="font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]">
            Proyectos
          </button>
        </Link>
      </div>
      <div className="items-center justify-center hidden h-full md:w-1/4 md:flex">
        <Iconos />
      </div>
      <div className="flex items-center justify-center w-2/3 h-full md:hidden">
        <Burger />
      </div>
    </div>
  );
};
