import React from "react";
import { CardProject } from "../../components/SliderProject/SliderProject";

export const Projects: React.FC = () => {
  return (
    <div
      id="/projects"
      className="w-full min-h-screen  flex justify-center items-center"
    >
      <CardProject />
    </div>
  );
};
