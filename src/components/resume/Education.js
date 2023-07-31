import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Educación</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Analista de Sistemas"
            subTitle="Tecnicatura en Análisis de Sistemas."
            result="CURSANDO"
            des="Instituto Superior de Formación Docente y Técnica n° 67"
          />
          <ResumeCard
            title="Full-stack Developer"
            subTitle="Bootcamp intensivo de 4 meses y 10 horas por día."
            result="2023"
            des="Plataforma 5 Coding Bootcamp"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Cursos</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Programación de Sistemas Multimediales"
            subTitle="Desarrollamos un sitio web para la escuela, e hicimos reparación y mantenimiento de redes y computadoras."
            result="2018"
            des="Centro de Formación Profesional n° 401"
          />
          <ResumeCard
            title="Fundamentos del Diseño"
            subTitle="Aprendimos bases de diseño para la creación y presentación de un nuevo producto."
            result="2017"
            des="Servicio Nacional de Aprendizaje"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
