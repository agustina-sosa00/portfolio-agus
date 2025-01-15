import React, { useEffect } from "react";
import { CardProject } from "../../components/SliderProject/SliderProject";
import { Element } from "react-scroll";
import "../../App.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Projects: React.FC = () => {
  // Controlador para la animación
  const controls = useAnimation();

  // Hook para detectar si el elemento está en vista
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez cuando entra en la vista
    threshold: 0.5, // 50% del componente visible para activar
  });

  // Efecto para activar la animación cuando está en vista
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.5 },
      });
    }
  }, [inView, controls]);
  return (
    <Element name="projects">
      <div
        id="/projects"
        className="flex flex-col items-center justify-start w-full min-h-screen gap-4 lg:pt-32 lg:gap-20 bgAboyProject"
      >
        <div className="flex items-center justify-center w-full" ref={ref}>
          <motion.h2
            className="text-[#faa2b2] text-3xl md:text-6xl font-parrafo "
            initial={{ opacity: 0, y: 50, scale: 0.8 }} // Empieza invisible, abajo y pequeño
            animate={controls}
          >
            Proyectos
          </motion.h2>
        </div>
        <div className="flex items-center justify-center w-full min-h-screen ">
          <CardProject />
        </div>
      </div>
    </Element>
  );
};
