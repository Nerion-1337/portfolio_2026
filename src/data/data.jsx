import { Phone } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiJest,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const IMG_PATH = "/images/";

export const personalInfo = {
  name: "Thibaut Senechal",
  role: "Développeur Fullstack",
  bio: [
    "Développeur full stack JavaScript basé à Bordeaux, je me suis reconverti après un parcours dans le sport et la préparation physique. Cette expérience m’a apporté rigueur, discipline et sens de l’objectif, que j’applique aujourd’hui au développement logiciel.",
    "Je travaille principalement avec React, Node.js, SQL et NoSQL, et je m’intéresse particulièrement aux problématiques back-end, architecture et performance.",
    "À l’aise en travail à distance, je deviens rapidement productif dans un environnement d’équipe et j’aime construire des applications propres, maintenables et orientées utilisateur. Je suis toujours à la recherche de nouveaux défis pour continuer à apprendre et à évoluer en tant que développeur.",
  ],
  socials: {
    github: "https://github.com/Nerion-1337",
    linkedin: "https://www.linkedin.com/in/thibaut-senechal-aabbbb199/",
    email: "mailto:nerion.1337.dev@gmail.com",
    phone: "tel:+33770390083",
  },
};

export const timeline = [
  {
    year: "2025 - Aujourd'hui",
    title: "Développeur Fullstack Freelance",
    description:
      "Conception d'applications web sur mesure, optimisation de performances et architecture logicielle pour divers clients.",
  },
  {
    year: "2024 - 2025",
    title: "Développeur Full Stack - Catalog",
    description:
      "Stage dans une start up avec un environnement agile pour développer une application de B2B de commerce.",
  },
  {
    year: "2023 - 2024",
    title: "Formation Développeur d'Application - JavaScript React",
    description:
      "OpenClassrooms - Réalisation de 14 projets professionnalisants (Front-end, Back-end, SEO, Debugging, Gestion de projet Agile).",
  },
  {
    year: "2018 - 2023",
    title: "Coach Sportif & Préparateur Physique",
    description:
      "Gestion de planning, suivi d'objectifs, rigueur et pédagogie. Une expérience qui m'a appris la discipline que j'applique aujourd'hui au code.",
  },
  // Tu peux ajouter d'autres étapes ici
];

export const projects = [
  {
    id: 1,
    title: "Miam Miam",
    description: (
      <>
        Projet Personnel: Application web de recette participative permettant
        aux utilisateurs de gérer précisément leur consommation de macro et
        micro nutriments.
        <br />
        <span className="font-bold text-blue-400">Tech :</span> Gestion API
        Google, Youtube, Stripe.
      </>
    ),
    stack: [
      { name: "React", icon: FaReact },
      { name: "Sass", icon: FaSass },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux", icon: SiRedux },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MySQL", icon: GrMysql },
    ],
    image: `${IMG_PATH}Miam-Miam.png`,
    links: {
      github: "https://github.com/Nerion-1337/MiamMIam",
      demo: "https://miammiam.vercel.app/",
    },
  },
  {
    id: 2,
    title: "SportSee",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Assurer la
        qualité des données d'une application, développer des éléments
        graphiques avancés à l'aide de bibliothèques et interagir avec un
        service web.
      </>
    ),
    stack: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}SportSee.png`,
    links: {
      github: "https://github.com/Nerion-1337/SportSee-OCR",
      demo: "https://nerion-1337.github.io/SportSee-OCR/",
    },
  },
  {
    id: 3,
    title: "Kasa",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Création de
        composants et de routes sous React. Développement d'un carrousel complet
        (navigation tactile, automatique, clavier).
      </>
    ),
    stack: [
      { name: "React", icon: FaReact },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}Kasa.png`,
    links: {
      github: "https://github.com/Nerion-1337/Kasa-OCR",
      demo: "https://nerion-1337.github.io/Kasa-OCR/",
    },
  },
  {
    id: 4,
    title: "Argent Bank",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Interaction
        et modélisation d'API au travers du state management Redux.
        Authentification sécurisée.
      </>
    ),
    stack: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}Argent-Bank.png`,
    links: {
      github: "https://github.com/Nerion-1337/ArgentBank-OCR",
      demo: "https://nerion-1337.github.io/AgentBank-OCR/",
    },
  },
  {
    id: 5,
    title: "Wealth Health",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Refonte
        d'une application jQuery vers React. Création et publication d’un plugin
        personnalisé sur NPM.
      </>
    ),
    stack: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}Wealth-Health.png`,
    links: {
      github: "https://github.com/Nerion-1337/Wealth_Health-OCR",
      demo: "https://nerion-1337.github.io/Wealth_Health-OCR/",
    },
  },
  {
    id: 6,
    title: "Hot Takes",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Construction
        d'une API sécurisée (OWASP). Implémentation d'opérations CRUD et
        stockage de données (MongoDB).
      </>
    ),
    stack: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
    image: `${IMG_PATH}Hot-Takes.png`,
    links: {
      github: "https://github.com/Nerion-1337/Hot-Takes-OCR",
      demo: null, // Pas de front-end déployé pour une API pure souvent
    },
  },
  {
    id: 7,
    title: "Fisheye",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Site
        accessible (WCAG) généré en JS natif. Utilisation du Factory Pattern.
        <br />
        <span className="text-gray-400 text-xs">
          Édition : Ajout personnel d'une version back-end SQL.
        </span>
      </>
    ),
    stack: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Sass", icon: FaSass },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MySQL", icon: GrMysql },
    ],
    image: `${IMG_PATH}Fisheye.png`,
    links: {
      github: "https://github.com/Nerion-1337/Fisheye-OCR",
      demo: "https://nerion-1337.github.io/Fisheye-OCR/",
    },
  },
  {
    id: 8,
    title: "Les Petits Plats",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span>{" "}
        Développement d'un algorithme de recherche performant (boucles natives
        vs méthodes Array) pour filtrer des recettes en temps réel.
      </>
    ),
    stack: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}Les-Petits-Plats.png`,
    links: {
      github: "https://github.com/Nerion-1337/Les-Petits-Plats-OCR",
      demo: "https://nerion-1337.github.io/Les-Petits-Plats-OCR/",
    },
  },
  {
    id: 9,
    title: "Billed",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Débogage
        d'une application SaaS RH. Réalisation de tests unitaires et
        d'intégration avec Jest.
      </>
    ),
    stack: [
      { name: "Jest", icon: SiJest },
      { name: "JavaScript", icon: SiJavascript },
    ],
    image: `${IMG_PATH}Billed.png`,
    links: {
      github: "https://github.com/Nerion-1337/Billed-OCR",
      demo: null,
    },
  },
  {
    id: 10,
    title: "LearnHome",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Définition
        des besoins, création de maquettes Figma et gestion de projet Agile.
      </>
    ),
    stack: [{ name: "Figma", icon: FaFigma }],
    image: `${IMG_PATH}LearnHome.png`,
    links: {
      github: "https://github.com/Nerion-1337/LearnHome-OCR",
      demo: "https://www.figma.com/file/XYplrUx19n8RhQKCYcYiEk/Untitled",
    },
  },
  {
    id: 11,
    title: "GameOn",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Création
        d'une landing page avec formulaire d'inscription et validation des
        données en JS.
      </>
    ),
    stack: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "Sass", icon: FaSass },
      { name: "JavaScript", icon: SiJavascript },
    ],
    image: `${IMG_PATH}GameOn.png`,
    links: {
      github: "https://github.com/Nerion-1337/GameOn-OCR",
      demo: "https://nerion-1337.github.io/GameOn-OCR/",
    },
  },
  {
    id: 12,
    title: "Ohmyfood",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Intégration
        mobile-first avec animations CSS avancées (Keyframes, Loaders) et Sass.
      </>
    ),
    stack: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}Ohmyfood.png`,
    links: {
      github: "https://github.com/Nerion-1337/Ohmyfood-OCR",
      demo: "https://nerion-1337.github.io/Ohmyfood-OCR/",
    },
  },
  {
    id: 13,
    title: "Booki",
    description: (
      <>
        Projet OpenClassrooms.
        <br />
        <span className="font-bold text-blue-400">Objectif :</span> Intégration
        d'interface responsive (HTML/CSS) respectant une maquette précise.
      </>
    ),
    stack: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
    image: `${IMG_PATH}Booki.png`,
    links: {
      github: "https://github.com/Nerion-1337/Booki-OCR",
      demo: "https://nerion-1337.github.io/Booki-OCR/",
    },
  },
  {
    id: 14,
    title: "Portfolio V1",
    description: (
      <>
        Mon précédent portfolio.
        <br />
        <span className="font-bold text-blue-400">Note :</span> Réalisé sans
        framework d'animation, tout en CSS/JS natif pour optimiser les
        performances.
      </>
    ),
    stack: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}Portfolio.png`,
    links: {
      github: "https://github.com/Nerion-1337/Portfolio",
      demo: "https://nerion-1337.github.io/Portfolio/",
    },
  },
];
