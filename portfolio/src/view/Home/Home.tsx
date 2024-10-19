import React from "react";
// import './Home.css'
import { CardHome } from "./CardHome";
import { Element } from "react-scroll";
export const Home: React.FC = () => {
  return (
    <Element name="home">
      <div
        id="/"
        className="w-full min-h-screen bgHome flex justify-center items-center pt-16 lg:pt-0"
      >
        <div className="w-4/5 h-72 md:h-80 lg:h-96 estiloDorado flex flex-col justify-center items-center ">
          <CardHome />
        </div>
      </div>
    </Element>
  );
};
