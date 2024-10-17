import React from "react";
import { ButtonHome } from "./ButtonHome";

export const CardHome: React.FC = () => {
  return (
    <>
      <div className="w-full h-52 md:w-2/3  lg:h-[290px] bgSubCaja flex flex-col justify-center items-center">
        <h2 className="font-parrafo text-2xl lg:text-4xl text-[#77530a] mt-5">
          Bienvenidos{" "}
        </h2>
        <h3 className="font-parrafo text-lg lg:text-2xl text-[#77530a]">soy</h3>
        <h1 className="font-titulo1 font-semibold text-4xl lg:text-8xl text-[#f9abb9]">
          Agustina Sosa
        </h1>
        <h2 className="font-parrafo text-center text-sm lg:text-3xl uppercase text-[#77530a] tracking-wider">
          Desarrolladora frontend
        </h2>
        <ButtonHome />
      </div>
    </>
  );
};
