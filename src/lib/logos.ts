import { IconProps } from "../components/util/Icon/Icon";

type logoNames =
  | "apollo"
  | "graphql"
  | "nestjs"
  |"angular"
  | "react"
  | "bootstrap"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "java"
  | "typescript"
  | "nodejs"
  | "javascript"
  | "cypress";

export type Logos = {
  [k in logoNames]: IconProps;
};

export const logos: Logos = {
  apollo: {
    label: "Apollo",
    logo: "/icons/apollo.svg",
    spin: false,
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
  angular: {
    label: "Angular",
    logo: "/icons/angular.svg",
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
  git: {
    label: "Git",
    logo: "/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "/icons/github.svg",
  },
  materialui: {
    label: "Material-UI",
    logo: "/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "/icons/mongodb.svg",
  },
  java: {
    label: "Java",
    logo: "/icons/java.svg",
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