import React from "react";
// import './Home.css'
import { CardHome } from "./CardHome";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  return (
    <Element name="home">
      <div
        id="/"
        className="flex items-center justify-center w-full min-h-screen pt-16 bgHome lg:pt-0"
      >
        <motion.div
          initial={{ opacity: 0, x: "-100%", scale: 0.8 }} // Empieza invisible, más pequeño y desplazado
          animate={{ opacity: 1, x: "0%", scale: 1 }} // Se vuelve visible, vuelve a su tamaño original y posición
          transition={{ duration: 4 }}
          className="flex flex-col items-center justify-center w-4/5 h-72 md:h-80 lg:h-96 estiloDorado "
        >
          <CardHome />
        </motion.div>
      </div>
    </Element>
  );
};
