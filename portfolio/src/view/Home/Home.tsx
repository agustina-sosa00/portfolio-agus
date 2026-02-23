import React from "react";
import { CardHome } from "./CardHome";
import { Element } from "react-scroll";

export const Home: React.FC = () => {
  return (
    <Element name="home">
      <div
        id="/"
        className="flex items-center justify-center w-full min-h-screen pt-16 bgHome lg:pt-0"
      >
        <div className="flex flex-col items-center justify-center w-4/5 h-72 md:h-80 lg:h-96 estiloDorado ">
          <CardHome />
        </div>
      </div>
    </Element>
  );
};
