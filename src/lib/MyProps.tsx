import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { TimelineEvent } from "../components/PersonalTimeline/PersonalTimelineEvents";
import { Skill } from "../components/Skills/Skills";
import skillLogos from "./logos";
import { PersonalTimelineData } from "../components/PersonalTimeline/PersonalTimeline";
import { IntroData } from "../components/Intro/Intro";



const Intro : IntroData ={
  title:"Sireesha Dadi",
  intro:" 9+ years deep in coding! I'm a full-stack developer (React, Java) conjuring innovative solutions. From sparkling clean code to seamless API connections, I manage the entire SDLC and ensure top performance through testing (unit, integration, A/B, you name it!). My Master's in CS with a twist (drone control with wearables!) showcases my passion for creative problem-solving.",
  roles: [
    "Front End Developer",
      1000,
    "Full Stack Developer",
      1000,
    "Mobile Developer",
      1000,
      ]
}

const MySkills: Skill[] = [
  {  logo: skillLogos.typescript },
  {  logo: skillLogos.react },
  {logo:skillLogos.java},
  {  logo: skillLogos.nodejs },
  { logo: skillLogos.mongodb },
  { logo: skillLogos.cypress },
  {  logo: skillLogos.materialui },
  {  logo: skillLogos.javascript },
  {logo:skillLogos.angular}
];

const EduEvents : TimelineEvent[] = [
  {
    id: 1,
    date: "2011-2015",
    title: "B.Tech in Computer Science",
    location: "Vignan, India",
    icon: <SchoolIcon />,
  },
  {
    id: 2,
    date: "2017-2018",
    title: "Masters in Computer Science",
    location: "University of South Florida, Tampa",
    icon: <SchoolIcon />,
    latest:true
  }
];

const WorkExpEvents : TimelineEvent[] = [
    
    {
      id: 1,
      date: "2015-2017",
      title: "Software Developer",
      location: "Infosys, India",
      icon: <WorkHistoryIcon />,
    },
    {
      id: 2,
      date: "2019-2021",
      title: "Software Developer 2",
      location: "Pasco County Sheriff's Office, FL",
      icon: <WorkHistoryIcon />,
    },
    {
      id: 3,
      date: "2021-present",
      title: "Software Engineer",
      location: "Indeed, FL",
      icon: <WorkHistoryIcon />,
      latest:true
    },
  ];

const WorkExp : PersonalTimelineData = {
    events: WorkExpEvents,
    position:'alternate',
    title: 'Work Experience'
   
  }

const Education : PersonalTimelineData= {
    events: EduEvents,
    position:'right',
    title: 'Education'
  }


export const PersonalDetails = {
  Intro: Intro,
  Skills : MySkills,
  WorkExp : WorkExp,
  Education: Education,

}
