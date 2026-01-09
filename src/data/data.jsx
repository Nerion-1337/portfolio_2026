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
  SiHono,
  SiPostgresql,
  SiUbuntu,
  SiNginx,
  SiPm2,
  SiVite,
  SiDocker,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const IMG_PATH = import.meta.env.BASE_URL + "images/";

const IMG_DETAIL_SMYLIFE = import.meta.env.BASE_URL + "images/smylife/";
const IMG_DETAIL_MIAMMIAM = import.meta.env.BASE_URL + "images/miammiam/";

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
    id: 15,
    title: "Smylife",
    highlight: true,
    description:
      "Api BtB d'un algorithme de matching pour application de colocation.<br /><span class='font-bold text-blue-400'>Note :</span> Installation et gestion de l'hebergement sur VPS.",
    stack: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Hono", icon: SiHono },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "Nginx", icon: SiNginx },
      { name: "PM2", icon: SiPm2 },
    ],
    image: `${IMG_PATH}Smylife.png`,
    links: {
      demo: "https://smylife.cloud",
    },
  },
  {
    id: 1,
    title: "Miam Miam",
    highlight: true,
    description:
      "Projet Personnel: Application web de recette participative permettant aux utilisateurs de gérer précisément leur consommation de macro et micro nutriments.<br /><span class='font-bold text-blue-400'>Tech :</span> Gestion API Google, Youtube, Stripe.",
    stack: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "Sass", icon: FaSass },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux", icon: SiRedux },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MySQL", icon: GrMysql },
    ],
    image: `${IMG_PATH}Miam-Miam.png`,
    links: {
      github: "https://github.com/Nerion-1337/MiamMIam",
      demo: "https://miammiam.vercel.app/",
    },
  },
  {
    id: 14,
    title: "Portfolio V1",
    description:
      "Mon précédent portfolio.<br /><span class='font-bold text-blue-400'>Note :</span> Réalisé sans framework d'animation, tout en CSS/JS natif pour optimiser les performances.",
    stack: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Sass", icon: FaSass },
    ],
    image: `${IMG_PATH}Portfolio.png`,
    links: {
      github: "https://github.com/Nerion-1337/Portfolio",
      demo: "https://nerion-1337.github.io/Portfolio/",
    },
  },
  {
    id: 14,
    title: "Todo List",
    description:
      "Entièrement réalisé en VibeCoding.<br /><span class='font-bold text-blue-400'>Note :</span> De multiple fonctionnalités desktop et mobile, en quelques heures.",
    stack: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Hono", icon: SiHono },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    image: `${IMG_PATH}todo_list.png`,
    links: {
      github: "https://github.com/Nerion-1337/Todo-list-claude",
    },
  },
  {
    id: 2,
    title: "SportSee",
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Assurer la qualité des données d'une application, développer des éléments graphiques avancés à l'aide de bibliothèques et interagir avec un service web.",
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
    id: 9,
    title: "Billed",
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Débogage d'une application SaaS RH. Réalisation de tests unitaires et d'intégration avec Jest.",
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
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Définition des besoins, création de maquettes Figma et gestion de projet Agile.",
    stack: [{ name: "Figma", icon: FaFigma }],
    image: `${IMG_PATH}LearnHome.png`,
    links: {
      github: "https://github.com/Nerion-1337/LearnHome-OCR",
      demo: "https://www.figma.com/file/XYplrUx19n8RhQKCYcYiEk/Untitled",
    },
  },
  {
    id: 5,
    title: "Wealth Health",
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Refonte d'une application jQuery vers React. Création et publication d’un plugin personnalisé sur NPM.",
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
    id: 8,
    title: "Les Petits Plats",
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Développement d'un algorithme de recherche performant (boucles natives vs méthodes Array) pour filtrer des recettes en temps réel.",
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
    id: 3,
    title: "Kasa",
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Création de composants et de routes sous React. Développement d'un carrousel complet (navigation tactile, automatique, clavier).",
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
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Interaction et modélisation d'API au travers du state management Redux. Authentification sécurisée.",
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
    id: 6,
    title: "Hot Takes",
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Construction d'une API sécurisée (OWASP). Implémentation d'opérations CRUD et stockage de données (MongoDB).",
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
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Site accessible (WCAG) généré en JS natif. Utilisation du Factory Pattern.<br /><span class='text-gray-400 text-xs'>Édition : Ajout personnel d'une version back-end SQL.</span>",
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
    id: 11,
    title: "GameOn",
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Création d'une landing page avec formulaire d'inscription et validation des données en JS.",
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
    description:
      "Projet OpenClassrooms.<br /><span class='font-bold text-blue-400'>Objectif :</span> Intégration mobile-first avec animations CSS avancées (Keyframes, Loaders) et Sass.",
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
    id: 9,
    title: "Booki",
    description:
      "Projet 2 OpenClassrooms: Intégrer l'interface d'un site de location avec HTML et CSS.",
    stack: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
    image: `${IMG_PATH}Booki.png`,
    links: {
      github: "https://github.com/Nerion-1337/P2-Booki",
      demo: "https://nerion-1337.github.io/P2-Booki/",
    },
  },
];

export const projectDetails = [
  {
    title: "Smylife",
    header: `${IMG_PATH}Smylife.png`,
    contenu: [
      {
        type: "title",
        content: "Vue d'ensemble du Projet",
      },
      {
        type: "text",
        content:
          "Smylife est une API B2B destinée aux applications de recherche de colocation. Son objectif est de proposer aux utilisateurs un quiz de <strong>30 questions</strong> pour identifier et suggérer des profils ayant des affinités réelles, allant au-delà des simples critères de surface.",
      },
      {
        type: "title",
        content: "Proposition de Valeur & Algorithme",
      },
      {
        type: "image",
        src: `${IMG_DETAIL_SMYLIFE}question.png`,
        caption: "Exemple Question",
        position: "right",
      },
      {
        type: "text",
        content:
          "L'algorithme de Smylife garantit des colocations durables en ne laissant plus le hasard former vos binômes. Il repose sur : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Analyse Psychométrique :</strong> Un moteur de matching qui analyse 30 critères précis incluant les habitudes de vie (propreté, rythme de sommeil, sociabilité, ambiance sonore).</li><li><strong>Critères Logistiques :</strong> Intégration croisée automatique du budget, de la localisation (zone géographique) et de la durée souhaitée.</li></ul><br/> <em>Objectif : Réduire drastiquement les conflits domestiques et maximiser l'entente entre résidents.</em>",
      },

      {
        type: "title",
        content: "Fonctionnement du Matching",
      },
      {
        type: "image",
        src: `${IMG_DETAIL_SMYLIFE}matching.png`,
        caption: "Resultat Matching",
        position: "right",
      },
      {
        type: "text",
        content:
          "Le système est conçu pour la pertinence et la performance : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Résultats :</strong> L'API retourne les 100 profils les plus compatibles avec un score de compatibilité minimum de 50%.</li><li><strong>Transparence :</strong> Chaque match inclut les valeurs détaillées des caractéristiques d'évaluation.</li><li><strong>Logique d'exclusion :</strong> Le système évite de recalculer ou de reproposer des profils qui ont déjà 'matché' entre eux.</li><li><strong>Flexibilité :</strong> La société cliente peut choisir d'intégrer les questions elle-même ou d'utiliser notre interface plateforme.</li></ul>",
      },
      {
        type: "title",
        content: "Architecture Technique & Stack",
      },
      {
        type: "text",
        content:
          "Nous avons privilégié la rapidité, la scalabilité et la sécurité des données : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Front-end :</strong> React + Vite + TypeScript pour une expérience utilisateur fluide.</li><li><strong>Back-end :</strong> Node.js + Hono + TypeScript. Le framework Hono assure une exécution ultra-rapide.</li><li><strong>Validation :</strong> Utilisation de <strong>Zod</strong> lors des communications API pour une vérification stricte et sécurisée des données.</li><li><strong>Base de données :</strong> PostgreSQL.</li></ul>",
      },
      {
        type: "title",
        content: "Optimisations & Performance",
      },
      {
        type: "text",
        content:
          "Une grande attention a été portée à l'ingénierie des données : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Requêtes SQL :</strong> Optimisation des transactions en regroupant les actions dans une seule requête pour limiter les appels à la base.</li><li><strong>Indexation :</strong> Optimisation fine des index pour garantir une lecture rapide (essentiel pour le matching).</li><li><strong>Structure :</strong> Création de tables spécifiques pour chaque fonction afin d'isoler les responsabilités.</li></ul>",
      },
      {
        type: "title",
        content: "Modèle B2B, Sécurité & Onboarding",
      },
      {
        type: "text",
        content:
          "Le processus d'intégration est automatisé et sécurisé pour chaque client : <br/><br/> <ol class='list-decimal pl-5 space-y-2'><li><strong>Paiement :</strong> Inscription et règlement via Stripe.</li><li><strong>Isolation (Multi-tenancy) :</strong> Création dynamique de tables spécifiques pour chaque société. Il n'y a aucun mélange de données entre les clients.</li><li><strong>Authentification :</strong> Envoi automatique d'un email contenant une clé privée (private key) pour signer les requêtes de manière cryptée.</li></ol>",
      },
      {
        type: "text",
        content:
          "L'architecture de Smylife repose sur une approche microservices, permettant une flexibilité et une scalabilité optimales.",
      },
    ],
  },
  {
    title: "Miam Miam",
    header: "https://www.youtube.com/watch?v=n0g97rHkMho", // Carousel
    contenu: [
      {
        type: "title",
        content: "Vue d'ensemble du Projet",
      },
      {
        type: "text",
        content:
          "Miam Miam est une plateforme culinaire complète permettant aux utilisateurs de créer, partager et gérer des recettes avec une précision extrême (ingrédients, ustensiles). Au-delà d'un simple livre de cuisine, l'application intègre une dimension <strong>Sociale</strong> (likes, commentaires, suivi de 'chefs') et une dimension <strong>Santé</strong> avancée.",
      },
      {
        type: "title",
        content: "Suivi Nutritionnel & Algorithmes",
      },
      {
        type: "image",
        src: `${IMG_DETAIL_MIAMMIAM}calendrier.png`,
        caption: "Calendrier",
        position: "right",
      },
      {
        type: "text",
        content:
          "Le cœur de l'application repose sur une gestion fine de la data nutritionnelle : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Calcul des besoins :</strong> Un espace privé permet à l'utilisateur de renseigner ses caractéristiques physiques et son activité hebdomadaire pour calculer automatiquement ses besoins journaliers (BMR/TDEE).</li><li><strong>Planification & Analyse :</strong> Via un calendrier interactif, l'utilisateur planifie ses repas. L'app compare alors en temps réel sa consommation planifiée (macro et micro-nutriments) par rapport à ses objectifs.</li><li><strong>Nutriscore :</strong> Développement d'un algorithme spécifique pour générer automatiquement le score nutritionnel de chaque recette créée.</li></ul>",
      },
      {
        type: "title",
        content: "Monétisation (Creator Economy)",
      },
      {
        type: "text",
        content:
          "L'application intègre un système d'abonnement complet développé <em>from scratch</em> : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Gestion des abonnements :</strong> Les créateurs peuvent restreindre l'accès à certaines recettes via des abonnements dont ils définissent eux-mêmes le prix et le contenu.</li><li><strong>Flexibilité :</strong> Une même recette peut être associée à plusieurs offres d'abonnement différentes.</li><li><strong>Paiement :</strong> Intégration de l'API <strong>Stripe</strong> et gestion des Webhooks pour sécuriser les transactions et les accès.</li></ul>",
      },
      {
        type: "title",
        content: "Stack Technique Actuelle",
      },
      {
        type: "text",
        content:
          "Une architecture Fullstack robuste : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Front-end :</strong> React + Vite + TypeScript + Redux (gestion d'état complexe) + Sass.</li><li><strong>Back-end :</strong> Node.js + Express.</li><li><strong>Base de données :</strong> MySQL.</li><li><strong>Auth :</strong> Système hybride (Email/Mot de passe crypté + Google OAuth).</li><li><strong>Recherche :</strong> Moteur de recherche interne par tags et mots-clés via requêtes SQL.</li></ul>",
      },
      {
        type: "title",
        content: "Retours d'Expérience & Optimisations",
      },
      {
        type: "text",
        content:
          "L'analyse post-développement a permis d'identifier des axes d'amélioration majeurs pour la version v2 : <br/><br/> <ul class='list-disc pl-5 space-y-2'><li><strong>Performance BDD :</strong> Mise en place d'index SQL (non présents initialement) et optimisation des transactions en regroupant les requêtes.</li><li><strong>Migration Stack :</strong> Transition de Express vers <strong>Hono</strong> pour la rapidité, et de MySQL vers <strong>PostgreSQL</strong> pour une meilleure scalabilité long terme.</li><li><strong>UI/UX :</strong> Passage de Sass à <strong>Tailwind CSS</strong> pour une organisation plus modulaire et une maintenance simplifiée.</li></ul>",
      },
    ],
  },
];
