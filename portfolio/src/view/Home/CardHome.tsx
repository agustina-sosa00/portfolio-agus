import React from "react";
import { ButtonHome } from "./ButtonHome";
import { motion } from "framer-motion";
import { DownoaldCV } from "./DownoaldCV";

export const CardHome: React.FC = () => {
  return (
    <>
      <div className="w-full h-52 md:w-2/3  lg:h-[290px] bgSubCaja flex flex-col justify-center items-center p-2">
        <motion.h2
          initial={{ opacity: 0, x: "-100%", scale: 0.8 }} // Empieza invisible, más pequeño y desplazado
          animate={{ opacity: 1, x: "0%", scale: 1 }} // Se vuelve visible, vuelve a su tamaño original y posición
          transition={{ duration: 1.5, delay: 1 }}
          className="font-parrafo text-2xl lg:text-4xl text-[#77530a] "
        >
          Bienvenidos
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, x: "-100%", scale: 0.8 }} // Empieza invisible, más pequeño y desplazado
          animate={{ opacity: 1, x: "0%", scale: 1 }} // Se vuelve visible, vuelve a su tamaño original y posición
          transition={{ duration: 1.5, delay: 1.3 }}
          className="font-parrafo text-lg lg:text-2xl text-[#77530a] w-1/2 text-center"
        >
          soy
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, scale: 0 }} // Empieza invisible y pequeño
          animate={{ opacity: 1, scale: 1 }} // Se vuelve visible y escala a su tamaño normal
          transition={{ duration: 2, delay: 2.2 }}
          className="font-titulo2  text-4xl md:text-6xl lg:text-8xl text-[#f9abb9]"
        >
          Agustina Sosa
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }} // Empieza invisible y pequeño
          animate={{ opacity: 1, scale: 1 }} // Se vuelve visible, vuelve a su tamaño original y posición
          transition={{ duration: 1.5, delay: 2.6 }}
          className="font-parrafo text-center text-sm lg:text-3xl uppercase text-[#77530a] tracking-wider"
        >
          Desarrolladora frontend
        </motion.h2>
        <div className="flex gap-4">
          <ButtonHome labelText="Proyectos" url="projects" />
          <DownoaldCV />
        </div>
      </div>
    </>
  );
};
