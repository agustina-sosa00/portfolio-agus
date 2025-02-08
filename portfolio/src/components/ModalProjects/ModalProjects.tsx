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
        <div className="relative flex flex-col items-center justify-start w-full gap-4 px-2 py-4 bg-white rounded-lg md:w-2/3 modal lg:h-3/4">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 text-secundario p-5 text-xl hover:text-[#5a4720]"
          >
            <IoClose />
          </button>

          <h1 className="text-xl font-semibold text-center font-parrafo lg:text-3xl text-primario">
            {title}
          </h1>
          {/* <img src={img} alt="" className="w-[90%] lg:w-3/5 rounded-lg modal" /> */}
          <VideoComponent video={video} />
          <p className="w-4/5 text-base text-center font-parrafo text-secundario lg:text-xl lg:w-2/3">
            {description}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="w-24 h-8 text-sm text-white outline-none cursor-pointer btn lg:w-24 lg:h-8 xl:w-36 xl:h-12 lg:text-base xl:text-xl rounded-xl hover:text-secundario ">
              Ver Sitio
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
