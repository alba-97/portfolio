import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Proyectos" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Mobile Gear"
          des="En 2 sprints semanales, desarrollamos un sitio e-commerce para la venta de celulares, tablets y accesorios usando el stack PERN."
          src={projectOne}
          githubLink="https://github.com/alba-97/mobile_gear_front"
          websiteLink="https://mobile-gear-front.onrender.com"
        />
        <ProjectsCard
          title="El club del plan"
          des="Desarrollamos en equipo una aplicación móvil para la empresa Ceibo Digital, en 4 sprints semanales, usando React Native con backend en Node.js, Express y MongoDB."
          src={projectTwo}
          githubLink="https://github.com/alba-97/ceibo-web"
          websiteLink="https://elclubdelplan.netlify.app"
        />
        <ProjectsCard
          title="Proyecto TMDB"
          des="En este proyecto individual de una semana, hice un sitio para listar películas desde la API de TMDB, y que el usuario logueado pueda agregarlas a su lista de favoritos."
          githubLink="https://github.com/alba-97/tmdb-solo-week"
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
