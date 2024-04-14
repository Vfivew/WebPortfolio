import project01 from "./../img/projects/financeSmall.jpg";

import project02 from "./../img/projects/seed.jpg";

import project03 from "./../img/projects/rest.png";

import project04 from "./../img/projects/makeup.jpg";

import project05 from "./../img/projects/store.jpg";

import project06 from "./../img/projects/blog.jpg";

import teamProject from "./../img/projects/teamproject.jpg";


const projects = [
  {
    title: "Landing",
    img: project03,
    imgBig: project03,
    skills: "JS, SCSS, Webpack",
    gitHubLink: "https://github.com/Vfivew/Restaurant1",
    link: "https://vfivew.github.io/Restaurant1/",
  },
  {
    title: 'Blog "FullStack"',
    img: project06,
    imgBig: project06,
    skills: "React, JS, Node.js, MongoDB, React Router, SCSS, Redux",
    gitHubLink: "https://github.com/Vfivew/Blog-frontend",
    link: "https://blog-frontend-peach.vercel.app/",
  },
  {
    title: "Store",
    img: project02,
    imgBig: project02,
    skills: "React, CSS, Redux, React Router",
    gitHubLink: "https://github.com/Vfivew/SeedShop",
    link: "https://seed-shop.vercel.app",
  },
  {
    title: "App for stocks",
    skills:
      "React, TypeScript, Firebase, Tailwind, Redux-toolkit, RTK Query, React Router",
    img: project01,
    imgBig: project01,
    gitHubLink: "https://github.com/Vfivew/Finance",
    link: "https://finance-alpha.vercel.app/",
  },
  {
    title: "Make-up service website",
    img: project04,
    imgBig: project04,
    skills: "React, React Router, CSS",
    gitHubLink: "https://github.com/Vfivew/Portfolio",
    link: "https://portfolio-sigma-bice-94.vercel.app/",
  },
  {
    title: "Store",
    img: project05,
    imgBig: project05,
    skills:
      "React, TypeScript, Firebase, React Router, SCSS, RTK Query, Redux-toolkit",
    gitHubLink: "https://github.com/Vfivew/Store",
    link: "https://store-git-test-vfivew.vercel.app",
  },
  {
    title: "MVP",
    img: teamProject,
    imgBig: teamProject,
    skills:
      "TypeScript, React, Redux Toolkit, Node Js, Knex, Objection, Fastify, Zod, PostgreSQL",
    gitHubLink:
      "https://github.com/BinaryStudioAcademy/bsa-winter-2023-2024-trackmates",
    link: "https://trackmates-frontend-xi.vercel.app/",
    isTeamProject: true,
  },
];

export {projects}
