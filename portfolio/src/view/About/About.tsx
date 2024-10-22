import React, { useEffect } from "react";
import "../../App.css";
import { arrayTec } from "../../helpers/arrayTechnology";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import foto from "../../assets/Frame 7-Photoroom.png";
import { useInView } from "react-intersection-observer";
export const About: React.FC = () => {
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
    <Element name="about">
      <div
        id="/about"
        className="flex items-center justify-center w-full min-h-screen p-10 bgAboyProject"
      >
        <div className="w-full md:w-[90%] h-full flex flex-col md:flex-row justify-center items-center mt-10 ">
          <div
            className="flex items-center justify-center w-full md:hidden"
            ref={ref}
          >
            <motion.h2
              className="text-[#faa2b2] text-3xl md:text-5xl font-parrafo "
              initial={{ opacity: 0, y: 50, scale: 0.8 }} // Empieza invisible, abajo y pequeño
              animate={controls}
            >
              Sobre Mi
            </motion.h2>
          </div>
          <div className="w-full sparkle-container md:w-1/2 xl:w-1/4 ">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="w-full h-full lg:w-[80%] xl:w-full flex justify-center items-center ">
              <img src={foto} alt="" className="w-full h-full imgEffectLeft " />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:h-[500px]   flex flex-col justify-center items-center p-3">
            <div className="hidden w-full md:block" ref={ref}>
              <motion.h2
                initial={{ opacity: 0, y: 50, scale: 0.8 }} // Empieza invisible, abajo y pequeño
                animate={controls} // Animación controlada por el estado
                className="text-[#faa2b2] text-5xl font-parrafo "
              >
                Sobre Mi
              </motion.h2>
            </div>
            <p className="font-parrafo text-[#77530a] text-base lg:text-2xl text-center md:text-justify mt-4">
              <span className="text-[#77530a] font-bold">
                Desarrolladora Frontend
              </span>{" "}
              con experiencia en{" "}
              <span className="text-[#77530a] font-bold">
                React, Next.js, JavaScript, Typescript
              </span>{" "}
              entre otras. Ofrezco soluciones digitales completas y atractivas
              que impulsan el éxito del proyecto. Soy{" "}
              <span className="text-[#77530a] font-bold">
                colaborativa, comunicativa y comprometida
              </span>{" "}
              con la calidad. Mantengo mi conocimiento actualizado con las
              últimas tendencias y tecnologías en desarrollo web.
            </p>
            <div className="flex items-center justify-center w-full overflow-hidden h-250px">
              <div className="flex items-center w-full overflow-hidden md:w-3/4 h-250px">
                <div className="slideTrack">
                  {[...arrayTec, ...arrayTec].map((tec, index) => (
                    <div key={index} className="mt-6 slide">
                      <h2 className="text-[#77530a] font-bold">{tec.name}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
