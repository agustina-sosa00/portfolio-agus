import React from "react";
import logo from "../../assets/logoAgus.png";
import { Toaster, toast } from "sonner";

export const Footer: React.FC = () => {
  //funcion para copiar el email al portapapeles
  const handleCopyEmail = () => {
    const email = "agustinaayelensosa2@gmail.com"; // Reemplaza con tu dirección de correo
    navigator.clipboard.writeText(email).then(
      //writeText es una funcion del navegador, que recibe por parametros el texto a copiar. Devuelve una promesa
      () => {
        toast.success("¡Correo copiado al portapapeles!"); // Muestra un mensaje de éxito
      },
      (err) => {
        console.error("Error al copiar el correo: ", err); // Muestra un mensaje de error
      }
    );
  };
  return (
    <>
      <Toaster position="bottom-center" />
      <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-1 sm:mb-0  "
            >
              <img
                src={logo}
                className="w-24 xl:w-44 xl:h-20 opacity-80"
                alt="Flowbite Logo"
              />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-secundario sm:mb-0 ">
              <li>
                <a
                  href="https://www.linkedin.com/in/agustina-ayelen-sosa/"
                  className="hover:underline me-4 md:me-6"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/agustina-sosa00"
                  className="hover:underline me-4 md:me-6"
                >
                  GitHub
                </a>
              </li>
              <li>
                <button
                  onClick={handleCopyEmail}
                  className="hover:underline me-4 md:me-6"
                >
                  Email
                </button>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2024 Desarrolladora Frontend
          </span>
        </div>
      </footer>
    </>
  );
};
