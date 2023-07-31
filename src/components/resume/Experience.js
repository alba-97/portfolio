import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experiencia laboral</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Técnico de sonido"
            subTitle="OH! Discos"
            result="2020-2023"
            des="Grabación de música de 60+ minutos, almacenamiento de datos en 400+ CDs, y diseño frontal y trasero de las cajas a vender."
          />
          <ResumeCard
            title="Game Developer"
            subTitle="Livemedia Digital Agency"
            result="2019"
            des="Programación de un juego web usando tecnologías HTML5 y la librería Phaser.js"
          />
          <ResumeCard
            title="Web Developer"
            subTitle="TX Tijuana"
            result="2019"
            des="Desarrollo de un sitio e-commerce para la personalización y venta de carcasas de celulares."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
