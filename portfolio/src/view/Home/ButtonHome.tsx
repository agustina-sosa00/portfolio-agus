import React from "react";
// import "./Home.css";
import "../../App.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const ButtonHome: React.FC = () => {
  return (
    <motion.div
      className="z-10 flex items-center justify-center w-full h-full "
      initial={{ opacity: 0, scale: 0 }} // Empieza invisible y pequeño
      animate={{ opacity: 1, scale: 1 }} // Se vuelve visible y escala a su tamaño normal
      transition={{ duration: 2, delay: 6 }}
    >
      <Link to="projects" smooth={true} duration={500}>
        <button className="w-24 h-8 text-sm text-white outline-none cursor-pointer btn lg:w-24 lg:h-8 xl:w-36 xl:h-12 lg:text-base xl:text-xl rounded-xl font-parrafo hover:text-secundario ">
          Proyectos
        </button>
      </Link>
    </motion.div>
  );
};
