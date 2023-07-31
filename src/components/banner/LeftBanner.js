import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Desarrollador Full Stack.",
      "Programador Web.",
      "Entusiasta de arte y diseño.",
      "Apasionado por la IA.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Bienvenid@ a mi portfolio 🙋‍♂️</h4>
        <h1 className="text-6xl font-bold text-white">
          Hola, soy{" "}
          <span className="text-designColor capitalize">Basilio Alvarez</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          "Soy desarrollador de aplicaciones web con experiencia en el stack
          MERN. Mi interés por la computación me llevó a comenzar la carrera de
          Analista de Sistemas, y hoy en día sigo aprendiendo nuevas tecnologías
          para crear aplicaciones funcionales y agradables de usar."
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
