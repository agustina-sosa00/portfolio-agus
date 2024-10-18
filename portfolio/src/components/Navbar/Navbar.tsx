import React from "react";
import { Logo } from "../Logo/Logo";
import { Iconos } from "../Iconos/Iconos";
import { Burger } from "../Burger/Burger";
import "./Navbar.css";
import { Link } from "react-scroll";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full h-[70px] flex justify-between items-center bg-white fixed top-0 z-30 shadow-lg">
      <div className="w-2/3 md:w-1/4 h-full flex justify-center items-center">
        <Logo />
      </div>
      <div className=" hidden md:w-1/2 h-full  md:flex justify-center items-center gap-8">
        <Link to="home" smooth={true} duration={500}>
          <button className="font-parrafo text-2xl text-[#77530a] hover:border-b-2 hover:border-[#77530a]">
            Home
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
      </div>
      <div className="hidden md:w-1/4 h-full md:flex justify-center items-center">
        <Iconos />
      </div>
      <div className="w-2/3 h-full flex justify-center items-center md:hidden">
        <Burger />
      </div>
    </div>
  );
};
