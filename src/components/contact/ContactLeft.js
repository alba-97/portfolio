import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";
import { useTranslation } from "react-i18next";

const ContactLeft = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Basilio Alvarez</h3>
        <p className="text-lg font-normal text-gray-400">{t("subtitle1")}</p>
        <p className="text-base text-gray-400 tracking-wide">
          {t("description2")}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">alvarezbasilio97@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Github:{" "}
          <span className="text-lightText">https://github.com/alba-97</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base uppercase font-titleFont mb-4">
          {t("contactme")}
        </h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/alba-97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiGithub />
            </span>
          </a>
          <a href="mailto:alvarezbasilio97@gmail.com">
            <span className="bannerIcon">
              <SiGmail />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/alvarezbasilio97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
