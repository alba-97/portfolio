import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: { order: ["path", "navigator"] },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
    whitelist: ["en", "es"],
    resources: {
      en: {
        translation: {
          home: "Home",
          projects: "Projects",
          contact: "Contact",
          welcome: "Welcome to my portfolio 🙋‍♂️",
          intro: "Hi, I'm ",
          subtitle1: "Full Stack Developer.",
          subtitle2: "Web Programmer.",
          subtitle3: "Art & Design Enthusiast.",
          subtitle4: "Passionate about AI.",
          description:
            "I am a web developer with experience in the MERN stack. My interest in computing led me to begin a career as a Systems Analyst, and today I continue learning new technologies to create functional and easy-to-use applications.",
          contactme: "CONTACT ME",
          techstack: "TECH STACK",
          education: "Education",
          courses: "Courses",
          tmdbTitle: "TMDB PROJECT",
          tmdbDesc:
            "In this one-week solo project, I made a site to list movies from the TMDB API, so that the logged in user can add them to their favorites list.",
          clubdelplanDesc:
            "As a team, we developed a mobile application for Ceibo Digital, in 4 weekly sprints, using React Native, with backend in Node.js, Express and MongoDB.",
          mobilegearDesc:
            "In 2 weekly sprints, we developed an e-commerce site for the sale of cell phones, tablets and accessories. This projects uses PostgreSQL, Express, React, and Node.js.",
          description2:
            "I am a web developer with experience in the MERN stack. I really enjoy the process of creating engaging web experiences that combine good functionality and attractive design.",
          copyright: "All rights reserved",
          send: "Send",
          name: "Name",
          phone: "Phone (optional)",
          subject: "Subject",
          message: "Message",
          skills: "Skills",
          workExperience: "Work experience",
          sistemas: "Systems Analyst",
          tecnicatura: "Systems Analyst Technician",
          isft: "Higher Institute of Technical Training n° 132",
          bootcamp: "Intensive bootcamp of 4 months and 10 hours per day.",
          sistemas_multimediales: "Multimedia Systems Programming",
          sistemas_multimediales_desc:
            "We developed a website for the school, and also the repair and maintenance of computers and networks.",
          cfp: "Professional training center n° 401",
          design: "Basics of Design",
          design_desc:
            "We learned the basics of design for the creation and presentation of a new product.",
          sena: "National Learning Service",
          sound_technician: "Sound technician",
          sound_technician_desc:
            "Music recording of 60+ minutes, data storage on 400+ CDs, and front and back design of the packages to be sold.",
          game_dev:
            "Did the programming of a web game using HTML5 with the Phaser.js library",
          web_developer:
            "Made an e-commerce website for the customization and sale of cell phone cases.",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          projects: "Proyectos",
          contact: "Contacto",
          welcome: " Bienvenid@ a mi portfolio 🙋‍♂️",
          intro: "Hola, soy ",
          subtitle1: "Desarrollador Full Stack.",
          subtitle2: "Programador Web.",
          subtitle3: "Entusiasta de arte y diseño.",
          subtitle4: "Apasionado por la IA.",
          description:
            "Soy desarrollador de aplicaciones web con experiencia en el stack MERN. Mi interés por la computación me llevó a comenzar la carrera de Analista de Sistemas, y hoy en día sigo aprendiendo nuevas tecnologías para crear aplicaciones funcionales y fáciles de usar.",
          contactme: "CONTACTAME",
          techstack: "STACK DE TECNOLOGÍAS",
          education: "Educación",
          courses: "Cursos",
          tmdbTitle: "PROYECTO TMDB",
          tmdbDesc:
            "En este proyecto individual de una semana, hice un sitio para listar películas desde la API de TMDB, y que el usuario logueado pueda agregarlas a su lista de favoritos.",
          clubdelplanDesc:
            "Desarrollamos en equipo una aplicación móvil para la empresa Ceibo Digital, en 4 sprints semanales, usando React Native con backend en Node.js, Express y MongoDB.",
          mobilegearDesc:
            "En 2 sprints semanales desarrollamos un sitio e-commerce para la venta de celulares, tablets y accesorios. Este proyecto utiliza PostgreSQL, Express, React y Node.js.",
          description2:
            "Soy un desarrollador web con experiencia en el stack MERN. Disfruto mucho el proceso de crear experiencias web cautivadoras que combinan buena funcionalidad y diseño atractivo.",
          copyright: "Todos los derechos reservados",
          send: "Enviar",
          name: "Nombre",
          phone: "Teléfono (opcional)",
          subject: "Asunto",
          message: "Mensaje",
          skills: "Competencias",
          workExperience: "Experiencia laboral",
          sistemas: "Analista de Sistemas",
          tecnicatura: "Tecnicatura en Análisis de Sistemas.",
          isft: "Instituto Superior de Formación Técnica n° 132",
          bootcamp: "Bootcamp intensivo de 4 meses y 10 horas por día.",
          sistemas_multimediales: "Programación de Sistemas Multimediales",
          sistemas_multimediales_desc:
            "Desarrollamos un sitio web para la escuela, e hicimos reparación y mantenimiento de redes y computadoras.",
          cfp: "Centro de Formación Profesional n° 401",

          design: "Fundamentos del Diseño",
          design_desc:
            "Aprendimos bases de diseño para la creación y presentación de un nuevo producto.",
          sena: "Servicio Nacional de Aprendizaje",
          sound_technician: "Técnico de sonido",
          sound_technician_desc:
            "Grabación de música de 60+ minutos, almacenamiento de datos en 400+ CDs, y diseño frontal y trasero de las cajas a vender.",
          game_dev:
            "Programación de un juego web usando tecnologías HTML5 y la librería Phaser.js",
          web_developer:
            "Desarrollo de un sitio e-commerce para la personalización y venta de carcasas de celulares.",
        },
      },
    },
  });

export default i18n;
