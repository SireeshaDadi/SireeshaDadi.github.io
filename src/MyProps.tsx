import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { TimelineEvent } from "./components/PersonalTimeline/PersonalTimelineEvents";
import { Skill } from "./components/Skills/Skills";
import logos from "./lib/logos";
import { PersonalTimelineData } from "./components/PersonalTimeline/PersonalTimeline";


const MySkills: Skill[] = [
  {  logo: logos.typescript },
  {  logo: logos.react },
  {logo:logos.java},
  {  logo: logos.nodejs },
  { logo: logos.mongodb },
  { logo: logos.cypress },
  {  logo: logos.materialui },
  {  logo: logos.javascript },
  {logo:logos.angular}
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
  Skills : MySkills,
  WorkExp : WorkExp,
  Education: Education,

}
