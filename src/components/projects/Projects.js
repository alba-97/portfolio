import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des={t("projects")} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Mobile Gear"
          des={t("mobilegearDesc")}
          src={projectOne}
          githubLink="https://github.com/alba-97/mobile_gear_front"
          websiteLink="https://mobilegear.netlify.app/"
        />
        <ProjectsCard
          title="El club del plan"
          des={t("clubdelplanDesc")}
          src={projectTwo}
          githubLink="https://github.com/alba-97/ceibo-web"
          websiteLink="https://elclubdelplan.netlify.app"
        />
        <ProjectsCard
          title={t("tmdbTitle")}
          des={t("tmdbDesc")}
          githubLink="https://github.com/alba-97/tmdb-solo-week"
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
