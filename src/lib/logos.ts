type logoNames =
  | "apollo"
  | "graphql"
  | "nestjs"
  | "react"
  | "bootstrap"
  | "chartjs"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "javascript"
  | "cypress";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/icons/apollo.svg",
    spin: false,
    invert: true,
  },
  graphql: {
    label: "GraphQl",
    logo: "/icons/graphql.svg",
    spin: false,
  },
  nestjs: {
    label: "Nest.js",
    logo: "/icons/nestjs.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "/icons/bootstrap.svg",
  },
  chartjs: {
    label: "Chart.js",
    logo: "/icons/chartjs.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "/icons/expressjs.png",
  },
  git: {
    label: "Git",
    logo: "/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "/icons/nextjs.svg",
    invert: true,
  },

  typescript: {
    label: "TypeScript",
    logo: "/icons/typescript.svg",
  },


  nodejs: {
    label: "Node.js",
    logo: "/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "/icons/javascript.svg",
  },



  cypress: {
    label: "Cypress",
    logo: "/icons/cypress.svg",
  },

};

export default logos;