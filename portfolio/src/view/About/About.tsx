import React, { useEffect } from "react";
import "../../App.css";
import { arrayTec } from "../../helpers/arrayTechnology";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import foto from "../../assets/Frame 7-Photoroom.png";
import { useInView } from "react-intersection-observer";

export const About: React.FC = () => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
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
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={controls}
                className="text-[#faa2b2] text-5xl font-parrafo "
              >
                Sobre Mi
              </motion.h2>
            </div>
            <p className="font-parrafo text-[#77530a] text-base lg:text-2xl text-center md:text-justify mt-4">
              Soy una{" "}
              <span className="text-[#77530a] font-bold">
                Desarrolladora Frontend
              </span>{" "}
              enfocada en construir experiencias digitales intuitivas y
              funcionales, utilizando tecnologías como{" "}
              <span className="text-[#77530a] font-bold">
                React Js, JavaScript, Typescript, TailwindCSS, Tanstack Query y
                Zustand.
              </span>{" "}
              <br />
              Me encuentro estudiando{" "}
              <span className="text-[#77530a] font-bold">
                React Native
              </span>{" "}
              para ampliar mi stack. Me destaco por mi{" "}
              <span className="text-[#77530a] font-bold">
                capacidad para entregar tareas en tiempos eficientes, escribir
                código limpio y bien estructurado.
              </span>{" "}
            </p>

            <div className="flex items-center justify-center w-full overflow-hidden h-250px">
              <div className="flex items-center w-full overflow-hidden md:w-3/4 h-250px">
                <div className="slideTrack gap-5">
                  {[...arrayTec, ...arrayTec].map((tec, index) => (
                    <div
                      key={index}
                      className="flex justify-center mt-6 w-28 slide"
                    >
                      <h2 className="text-[#77530a] font-bold text-nowrap">
                        {tec.name}
                      </h2>
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
