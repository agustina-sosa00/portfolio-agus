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
    <div className="w-full h-full  flex  flex-wrap justify-center items-center gap-10  relative">
      {projects.map((project) => {
        return (
          <>
            <div
              className="card w-60 h-40 lg:w-96 lg:h-56 xl:w-[40rem] xl:h-80 rounded-xl flex justify-center items-center relative "
              key={project.id}
            >
              <img src={project.image} alt="" className="h-full " />
              <div className="card__content absolute w-full h-full flex flex-col p-2 lg:p-5 bg-white top-1/2 left-1/2 ">
                <p className=" mt-5 lg:m-0 text-center lg:text-start text-lg lg:text-xl xl:text-3xl text-primario font-bold font-parrafo">
                  {project.title}
                </p>
                <p className="hidden lg:block card__description xl:mt-3 text-xs lg:text-sm xl:text-lg text-secundario ">
                  {project.description}
                </p>
                <div className="w-full h-full flex justify-center items-center">
                  <button
                    className="btn w-24 h-8 lg:w-24 lg:h-8 xl:w-36 xl:h-12 text-sm lg:text-base xl:text-xl rounded-xl outline-none text-white cursor-pointer hover:text-secundario "
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
                img={project.image}
                closeModal={handleCloseModal}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
