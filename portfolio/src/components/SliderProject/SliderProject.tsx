import { projects } from "../../helpers/arrayProject";
import "../../App.css";
export const CardProject = () => {
  return (
    <div className="w-full h-full  flex  flex-wrap justify-center items-center gap-10 ">
      {projects.map((project) => {
        return (
          <div
            className="card w-[40rem] h-80 rounded-xl flex justify-center items-center relative "
            key={project.id}
          >
            <img src={project.image} alt="" className="h-full" />
            <div className="card__content absolute w-full h-full p-5 bg-white top-1/2 left-1/2 ">
              <p className=" m-0 text-3xl text-primario font-bold">
                {project.title}
              </p>
              <p className="card__description mt-3 text-lg text-secundario ">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
