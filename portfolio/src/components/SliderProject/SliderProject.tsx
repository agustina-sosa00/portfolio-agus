import { projects } from "../../helpers/arrayProject";

export const CardProject = () => {
  return (
    <div className="w-full h-full  flex  flex-wrap justify-center items-center gap-10 ">
      {projects.map((project) => {
        return (
          <div
            className="w-[40rem] h-60 flex  justify-center items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 "
            key={project.id}
          >
            <div className="w-2/3 h-full p-3">
              <img
                className="object-cover w-full h-full  "
                src={project.image}
                alt=""
              />
            </div>

            <div className="w-1/3 flex flex-col justify-evenly items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
