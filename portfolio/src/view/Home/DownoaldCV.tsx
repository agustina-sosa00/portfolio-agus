import React from "react";
import { motion } from "framer-motion";

export const DownoaldCV: React.FC = () => {
  return (
    <motion.div
      className="z-10 flex items-center justify-center w-full h-full "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 2.5 }}
    >
      <div>
        <a href="/AGUSTINA-AYELÉN-SOSA.pdf" download="SosaAgustina.pdf">
          <button className="w-24 h-8 text-sm text-white outline-none cursor-pointer btn lg:w-24 lg:h-8 xl:w-36 xl:h-12 lg:text-base xl:text-xl rounded-xl font-parrafo hover:text-secundario ">
            Descargar CV
          </button>
        </a>
      </div>
    </motion.div>
  );
};
