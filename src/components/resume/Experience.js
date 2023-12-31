import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{t("workExperience")}</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t("sound_technician")}
            subTitle="OH! Discos"
            result="2020-2022"
            des={t("sound_technician_desc")}
          />
          <ResumeCard
            title="Game Developer"
            subTitle="Livemedia Digital Agency"
            result="2019"
            des={t("game_dev")}
          />
          <ResumeCard
            title="Web Developer"
            subTitle="TX Tijuana"
            result="2019"
            des={t("web_developer")}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
