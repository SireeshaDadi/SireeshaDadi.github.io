import { IconProps } from "../components/util/Icon/Icon";

type skillNames =
  | "apollo"
  | "graphql"
  | "angular"
  | "react"
  | "bootstrap"
  | "git"
  | "materialui"
  | "mongodb"
  | "java"
  | "typescript"
  | "nodejs"
  | "javascript"
  | "cypress";

export type SkillIcons = {
  [k in skillNames]: IconProps;
};

export const skillLogos: SkillIcons = {
  apollo: {
    label: "Apollo",
    path: "/icons/apollo.svg",
    spin: false,
  },
  graphql: {
    label: "GraphQl",
    path: "/icons/graphql.svg",
    spin: false,
  },
  angular: {
    label: "Angular",
    path: "/icons/angular.svg",
    spin: false,
  },
  react: {
    label: "React",
    path: "/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    path: "/icons/bootstrap.svg",
  },
  git: {
    label: "Git",
    path: "/icons/git.svg",
  },
  materialui: {
    label: "Material-UI",
    path: "/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    path: "/icons/mongodb.svg",
  },
  java: {
    label: "Java",
    path: "/icons/java.svg",
  },

  typescript: {
    label: "TypeScript",
    path: "/icons/typescript.svg",
  },


  nodejs: {
    label: "Node.js",
    path: "/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    path: "/icons/javascript.svg",
  },
  cypress: {
    label: "Cypress",
    path: "/icons/cypress.svg",
  },

};

export default skillLogos;