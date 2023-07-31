import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Contactame</h2>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          STACK DE TECNOLOGÍAS
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiExpress />
            </span>
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaReact />
            </span>
          </a>
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
