import React from "react";
import { CardProject } from "../../components/SliderProject/SliderProject";
import { Element } from "react-scroll";
import "../../App.css";

export const Projects: React.FC = () => {
  return (
    <Element name="projects">
      <div
        id="/projects"
        className="flex flex-col items-center justify-start w-full min-h-screen gap-8 pt-20 pb-16 lg:pt-32 lg:gap-20 bgAboyProject"
      >
        <div className="flex items-center justify-center w-full">
          <h2 className="text-[#faa2b2] text-3xl md:text-6xl font-parrafo ">
            Proyectos
          </h2>
        </div>
        <div className="flex items-center justify-center w-full min-h-screen ">
          <CardProject />
        </div>
      </div>
    </Element>
  );
};
