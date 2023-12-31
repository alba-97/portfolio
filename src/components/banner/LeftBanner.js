import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { useTranslation } from "react-i18next";

const LeftBanner = () => {
  const { t } = useTranslation();
  const [text] = useTypewriter({
    words: [t("subtitle1"), t("subtitle2"), t("subtitle3"), t("subtitle4")],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">{t("welcome")}</h4>
        <h1 className="text-6xl font-bold text-white">
          {t("intro")}
          <span className="text-designColor capitalize">Basilio Alvarez</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#68d1bc"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {t("description")}
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
