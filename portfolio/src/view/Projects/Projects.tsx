import React from "react";
import { CardProject } from "../../components/SliderProject/SliderProject";
import { Element } from "react-scroll";

export const Projects: React.FC = () => {
  return (
    <Element name="projects">
      <div
        id="/projects"
        className="w-full min-h-screen flex flex-col justify-start items-center lg:pt-32 mb-10 gap-8 lg:gap-20"
      >
        <div className="w-full  flex justify-center items-center">
          <h2 className="text-[#faa2b2] text-3xl md:text-6xl font-parrafo ">
            Proyectos
          </h2>
        </div>
        <div className="w-full min-h-screen  flex justify-center items-center ">
          <CardProject />
        </div>
      </div>
    </Element>
  );
};
