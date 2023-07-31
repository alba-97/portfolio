import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <section id="resume" className="w-full border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center py-5">
        <h3 className="text-base text-designColor font-thin">
          Actualmente trabajando en ScaleMote
        </h3>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Educación
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Competencias
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experiencia laboral
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
