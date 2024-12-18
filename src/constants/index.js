import project1 from "../assets/projects/projets.png";
import project2 from "../assets/projects/IG.png";
import project3 from "../assets/projects/CM.png";
import project4 from "../assets/projects/EN.png";
import { link } from "framer-motion/client";

export const HERO_CONTENT = `Étudiant en conception et développement d'applications à Ada Tech School, je recherche une alternance en développement web full stack en région d’Ile-de-France. Motivé par les nouvelles technologies et passionné par le développement informatique, je souhaite m'impliquer dans la conception, le développement, le déploiement et la maintenance de solutions web ou mobiles. Cette alternance me permettra d'acquérir une première expérience professionnelle et de concrétiser mon projet professionnel.`;

export const ABOUT_TEXT = `Je suis un développeur full stack dédié et polyvalent, passionné par la création d'applications Web efficaces et conviviales. J'ai travaillé avec une variété de technologies, notamment React, Next.js, Node.js, MySQL, PostgreSQL , PHP , C# et Tailwind. Mon parcours dans le développement Web a commencé par une profonde curiosité pour le fonctionnement des choses, je m'efforce continuellement d'apprendre et de m'adapter à de nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'aime résoudre des problèmes complexes pour fournir des solutions de haute qualité. En dehors du codage, j'aime explorer de nouvelles technologies modernes.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Present",
    role: "CONCEPTEUR DÉVELOPPEUR D’APPLICATION",
    company: "Ada Tech School , Paris",
    description: ``,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Sept 2022 - 2023",
    role: "BTS SIO OPTION SLAM",
    company: "EFREI Paris, Villejuif",
    description: ``,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Sept 2021 - Sept 2022",
    role: "BACCALAURÉAT STI2D SPECIALITÉ SIN",
    company: "Lycée Pierre de Coubertin, Meaux",
    description: ``,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const Projects = [
  {
    title: "JEU VIDEO | MAI 2024 (EN COURS)",
    link:"",
    image: project3,
    description:
      "Conception et développement d‘un mini jeu de combat type Dungeon Crawler (inspiré du jeu Darkest Dungeon).",
    technologies: ["C#","Unity","VScode"],
  },
  {
    title: "PLATEFORME DE VENTE DE MEUBLES | AVRIL 2024",
    link:"https://github.com/Aroun77/LeComptoir",
    image: project1,
    description: "Projet de création d'une plateforme de gestion pour un magasin de meubles, en développant une architecture robuste avec un système de gestion des utilisateurs et des droits d'accès",
    technologies: ["React","Javascript","Express",  "Chakra ui" , "Supabase (API)",],
  },
  {
    title: "EXTENSION NAVIGATEUR | JAN 2024",
    link:"https://github.com/Aroun77/extension-navigateur",
    image: project4,
    description:
    "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "IRON GYM | OCT 2022",
    link: "https://iron-gym-five.vercel.app/",
    image: project2,
    description:
      "Création d'un site web qui centralise plusieurs informations sur le thème du fitness (bien être, santé, musculation, crossfit...).",
    technologies: ["HTML", "CSS","Javascript",],
  },
];

export const CONTACT = {
  address: "Adress : 14 Rue De La Gironnette, Meaux 77100 ",
  phoneNo: " Mobile : 0767769296 ",
  email: "gnanavelan.aroun@gmail.com",
};
