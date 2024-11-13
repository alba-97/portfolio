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
            "I am a full-stack developer with experience in the MERN stack. My interest in computing led me to begin a career as a Systems Analyst, and today I keep on building functional and scalable web applications using modern technologies such as React, Node.js, Express, Nest.js, MongoDB, and PostgreSQL.",
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
            "I am a developer with experience in the MERN stack. I really enjoy the process of creating engaging web experiences that combine good functionality and attractive design.",
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
          sistemas_multimediales: "Web Programming",
          sistemas_multimediales_desc:
            "Basics of web development by creating a complete website for a school, using WordPress.",
          cfp: "Professional training center n° 401",
          design: "Basics of Design",
          design_desc:
            "We learned the basics of design for the creation and presentation of a new product.",
          sena: "National Learning Service",
          sound_technician: "Graphic Designer",
          sound_technician_desc:
            "Designed packaging materials and visual assets for a variety of musical products, including CDs, vinyl covers, and promotional merchandise.",
          game_dev:
            "Developed interactive web games using HTML5 and Phaser.js library.",
          web_developer:
            "Built a custom e-commerce site from scratch using WordPress and WooCommerce, focusing on the sale and customization of cell phone cases.",
          success1: "Thank you very much,",
          success2: "! Your message was sent successfully.",
          nameErrorMsg: "The name is required",
          emailErrorMsg: "Email is required",
          emailErrorMsg2: "A valid email is required",
          subjectErrorMsg: "Subject is required",
          messageErrorMsg: "The message is required",
          biggerDeveloperTitle: "Full-Stack Developer",
          biggerDeveloperDesc:
            "Developed and maintained custom web applications for diverse corporate clients, utilizing Nest.js, React, Node.js, and PostgreSQL.",
          dlpManagerDesc:
            "Project for a post-construction management platform that allows property owners and managers to report defects.",
          axeesDesc:
            "Project for a marketplace platform connecting brands and influencers.",
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
            "Soy un desarrollador full-stack con experiencia en el stack MERN. Mi interés en la computación me llevó a iniciar una carrera como Analista de Sistemas, y hoy en día sigo construyendo aplicaciones web funcionales y escalables utilizando tecnologías modernas como React, Node.js, Express, Nest.js, MongoDB y PostgreSQL.",
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
            "Soy desarrollador con experiencia en el stack MERN. Disfruto mucho el proceso de crear experiencias web cautivadoras que combinan buena funcionalidad y diseño atractivo.",
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
          sistemas_multimediales: "Programación Web",
          sistemas_multimediales_desc:
            "Conceptos básicos de desarrollo web mediante la creación de un sitio web completo para una escuela utilizando WordPress.",
          cfp: "Centro de Formación Profesional n° 401",

          design: "Fundamentos del Diseño",
          design_desc:
            "Aprendimos bases de diseño para la creación y presentación de un nuevo producto.",
          sena: "Servicio Nacional de Aprendizaje",
          sound_technician: "Diseñador Gráfico",
          sound_technician_desc:
            "•Diseñé para una variedad de productos musicales, incluyendo CDs, portadas de vinilos y mercancía promocional.",
          game_dev:
            "Desarrollé juegos web interactivos utilizando HTML5 y la librería Phaser.js.",
          web_developer:
            "Construí un sitio de comercio electrónico personalizado desde cero utilizando WordPress y WooCommerce, enfocado en la venta y personalización de fundas para teléfonos móviles.",

          success1: "¡Muchas gracias,",
          success2: "! Tu mensaje se envió correctamente.",
          nameErrorMsg: "El nombre es requerido",
          emailErrorMsg: "El email es requerido",
          emailErrorMsg2: "Se requiere un email válido",
          subjectErrorMsg: "El asunto es requerido",
          messageErrorMsg: "El mensaje es requerido",
          biggerDeveloperTitle: "Full-Stack Developer",
          biggerDeveloperDesc:
            "Desarrollé y mantuve aplicaciones web personalizadas para diversos clientes, utilizando Nest.js, React, Node.js, PostgreSQL y MongoDB.",
          dlpManagerDesc:
            "Proyecto para una plataforma de gestión post-construcción que permite a propietarios y administradores de propiedades informar sobre un defecto.",
          axeesDesc:
            "Proyecto para una plataforma de marketplace entre marcas e influencers",
        },
      },
    },
  });

export default i18n;
