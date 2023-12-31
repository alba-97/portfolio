import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t("education")}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t("sistemas")}
            subTitle={t("tecnicatura")}
            result="2021-2023"
            des={t("isft")}
          />
          <ResumeCard
            title="Full-stack Developer"
            subTitle={t("bootcamp")}
            result="2023"
            des="Plataforma 5 Coding Bootcamp"
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t("courses")}</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={t("sistemas_multimediales")}
            subTitle={t("sistemas_multimediales_desc")}
            result="2018"
            des={t("cfp")}
          />
          <ResumeCard
            title={t("design")}
            subTitle={t("design_desc")}
            result="2017"
            des={t("sena")}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
