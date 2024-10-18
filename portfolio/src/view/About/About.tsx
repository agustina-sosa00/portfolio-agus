import React from "react";
import "../../App.css";
import { arrayTec } from "../../helpers/arrayTechnology";
import { Element } from "react-scroll";
// import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Element name="about">
      <div
        id="/about"
        className="w-full min-h-screen bgAboyProject p-10 flex  justify-center items-center"
      >
        <div className="w-full md:w-[90%] h-[90%] flex flex-col md:flex-row justify-center items-center mt-10 ">
          <div className="w-full md:hidden flex justify-center items-center">
            <h2 className="text-[#faa2b2] text-3xl md:text-5xl font-parrafo ">
              Sobre Mi
            </h2>
          </div>
          <div className="sparkle-container w-full md:w-1/4 md:h-[100%]  ">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="w-[200px]  h-[300px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px] flex justify-center items-center bgAbout">
              <img
                src="https://i.ibb.co/bRW8GzW/Whats-App-Image-2024-08-15-at-17-18-Photoroom.png"
                alt=""
                className="w-full sm:w-[80%] md:w-[220px] h-[300px] md:h-[400px]  md:imgEffectLeft "
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:h-[500px]  flex flex-col justify-center items-center p-3">
            <div className="w-full hidden md:block">
              <h2 className="text-[#faa2b2] text-5xl font-parrafo ">
                Sobre Mi
              </h2>
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
            <div className=" w-full h-250px flex justify-center items-center overflow-hidden ">
              <div className="w-full md:w-3/4 h-250px flex items-center overflow-hidden">
                <div className="slideTrack">
                  {[...arrayTec, ...arrayTec].map((tec, index) => (
                    <div key={index} className="slide mt-6">
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
