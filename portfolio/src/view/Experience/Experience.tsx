import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";

export default function Experience() {
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
    <Element name="experience">
      <div
        id="/about"
        className="flex flex-col items-center justify-start w-full min-h-screen gap-4 lg:pt-20 lg:gap-20 bgAboyProject"
      >
        <div
          ref={ref}
          className="w-full md:w-[90%] h-full flex flex-col md:flex-row justify-center items-center mt-10 "
        >
          <motion.h2
            className="text-[#faa2b2] text-3xl md:text-5xl font-parrafo "
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={controls}
          >
            Experiencia
          </motion.h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="w-1/2 flex items-center px-5  min-h-52 bg-white shadow-lg shadow-gray-200 rounded-md gap-5 py-4">
            <FaCode color="#faa2b2" className="w-8 h-8" />
            <div className="border border-[#f1f0f0] h-32"></div>
            <div className="flex flex-col flex-1 justify-start gap-4">
              <div className="w-full flex justify-between">
                <div>
                  <p className="text-[#77530a] font-bold">Nova Sofware</p>

                  <p className="text-[#77530a] text-sm">Fontend</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[#77530a] font-bold">
                    Buenos Aires, Argentina
                  </p>
                  <p className="text-[#77530a] text-sm">
                    Junio 2025 - Actualidad
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[#77530a] text-sm flex items-center gap-1">
                  <RiArrowDropRightLine /> Implemento nuevas funcionalidades con
                  React Js y TypeScript
                </p>
                <p className="text-[#77530a] text-sm flex items-center gap-1">
                  <RiArrowDropRightLine /> Realizo consumo de API REST con Axios
                  y Tanstack Query
                </p>
                <p className="text-[#77530a] text-sm flex items-center gap-1">
                  <RiArrowDropRightLine /> Rediseño interfaces en aplicaciones
                  web (React Js) y aplicaciones moviles (React Native)
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center px-5  min-h-52 bg-white shadow-lg shadow-gray-200 rounded-md gap-5 py-4">
            <FaCode color="#faa2b2" className="w-8 h-8" />
            <div className="border border-[#f1f0f0] h-32"></div>
            <div className="flex flex-col flex-1 justify-start gap-4">
              <div className="w-full flex justify-between">
                <div>
                  <p className="text-[#77530a] font-bold">Deenex</p>

                  <p className="text-[#77530a] text-sm">Fontend - Pasantía</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[#77530a] font-bold">
                    Buenos Aires, Argentina
                  </p>
                  <p className="text-[#77530a] text-sm">
                    Septiembre 2024 - Febrero 2025
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[#77530a] text-sm flex items-center gap-1">
                  <RiArrowDropRightLine /> Implementé nuevas funcionalidades con
                  React Js, JavaScript y Redux.
                </p>
                <p className="text-[#77530a] text-sm flex items-center gap-1">
                  <RiArrowDropRightLine /> Implementé nuevas interfaces
                  interactivas y responsivas siguiendo diseños de Figma.
                </p>
                <p className="text-[#77530a] text-sm flex items-center gap-1">
                  <RiArrowDropRightLine /> Colaboré con diseñadores y
                  desarrolladores backends para la entrega de proyectos en
                  tiempo y forma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
