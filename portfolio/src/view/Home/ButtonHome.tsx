import React from "react";
// import "./Home.css";
import "../../App.css";
import { Link } from "react-scroll";

export const ButtonHome: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center  z-10 ">
      <Link to="projects" smooth={true} duration={500}>
        <button className="btn w-24 h-8 lg:w-24 lg:h-8 xl:w-36 xl:h-12 text-sm lg:text-base xl:text-xl rounded-xl outline-none font-parrafo text-white cursor-pointer hover:text-secundario  ">
          Proyectos
        </button>
      </Link>
    </div>
  );
};
