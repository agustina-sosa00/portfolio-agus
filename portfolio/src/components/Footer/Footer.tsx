import React from "react";
import { Toaster, toast } from "sonner";
import "../../App.css";

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
      <footer className="rounded-lg shadow bgAboyProject ">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://wa.me/+5401165149673?text=Hola%20Agustina."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-1 sm:mb-0 "
            >
              <span className="text-xl font-medium font-titulo2 lg:text-3xl text-secundario">
                Agustina Sosa
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-secundario sm:mb-0 ">
              <li>
                <a
                  href="https://www.linkedin.com/in/agustina-ayelen-sosa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/agustina-sosa00"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2024 Desarrolladora Frontend
          </span>
        </div>
      </footer>
    </>
  );
};
