import React from "react";
import "../../App.css";
import { IoClose } from "react-icons/io5";
import VideoComponent from "../VideoProject/VideoProject";

interface Props {
  closeModal: () => void;
  title: string;
  url: string;
  description: string;
  video: string;
}
export const ModalProjects: React.FC<Props> = ({
  closeModal,
  title,
  url,
  description,
  video,
}) => {
  return (
    <>
      <div
        className="w-full h-full fixed z-30 top-0 left-0 bg-[#ffffff53] flex justify-center items-center "
        onClick={closeModal}
      >
        <div className="w-full md:w-2/3  bg-white rounded-lg modal flex flex-col justify-start items-center py-4 px-2 gap-4 relative">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 text-secundario p-5 text-xl hover:text-[#5a4720]"
          >
            <IoClose />
          </button>

          <h1 className="text-center font-parrafo text-xl lg:text-3xl text-primario font-semibold">
            {title}
          </h1>
          {/* <img src={img} alt="" className="w-[90%] lg:w-3/5 rounded-lg modal" /> */}
          <VideoComponent video={video} />
          <p className="text-center font-parrafo text-secundario text-base lg:text-xl w-2/3">
            {description}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="btn w-24 h-8 lg:w-24 lg:h-8 xl:w-36 xl:h-12 text-sm lg:text-base xl:text-xl rounded-xl outline-none text-white cursor-pointer hover:text-secundario ">
              Ver Sitio
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
