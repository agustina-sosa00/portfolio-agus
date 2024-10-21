import { projects } from "../../helpers/arrayProject";
import "../../App.css";
import "../../view/Home/Home.css";
import { useState } from "react";
import { ModalProjects } from "../ModalProjects/ModalProjects";
export const CardProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState<number>(0);
  const handleOpenModal = (id: number) => {
    setIdCard(id);

    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="relative flex flex-wrap items-center justify-center w-full h-full gap-10">
      {projects.map((project) => {
        return (
          <>
            <div
              className="card w-60 h-40 lg:w-96 lg:h-56 xl:w-[40rem] xl:h-80 rounded-xl flex justify-center items-center relative "
              key={project.id}
            >
              <img src={project.image} alt="" className="h-full " />
              <div className="absolute flex flex-col w-full h-full p-2 bg-white card__content lg:p-5 top-1/2 left-1/2 ">
                <p className="mt-5 text-lg font-bold text-center lg:m-0 lg:text-start lg:text-xl xl:text-3xl text-primario font-parrafo">
                  {project.title}
                </p>
                <p className="hidden text-xs lg:block card__description xl:mt-3 lg:text-sm xl:text-lg text-secundario ">
                  {project.description}
                </p>
                <div className="flex items-center justify-center w-full h-full">
                  <button
                    className="w-24 h-8 text-sm text-white outline-none cursor-pointer btn lg:w-24 lg:h-8 xl:w-36 xl:h-12 lg:text-base xl:text-xl rounded-xl hover:text-secundario "
                    onClick={() => handleOpenModal(project.id)}
                  >
                    Más info
                  </button>
                </div>
              </div>
            </div>
            {showModal && idCard === project.id && (
              <ModalProjects
                title={project.title}
                url={project.url}
                description={project.description}
                video={project.video}
                closeModal={handleCloseModal}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
