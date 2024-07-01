import React from "react";
import { PersonalTimelineData } from "../PersonalTimeline";
import { TimelineEvent } from "../PersonalTimelineEvents";


export const mockData: PersonalTimelineData = {
    title: 'My Personal Timeline',
    events: [
      {
        id: 1,
        date: '2023-01-01',
        title: 'First Event',
        location: 'Location A',
        icon: <span>Icon A</span>,
        latest: true,
      },
      {
        id: 2,
        date: '2023-02-01',
        title: 'Second Event',
        location: 'Location B',
        icon: <span>Icon B</span>,
      },
    ],
    position: 'alternate',
  };

 export const mockEvents: TimelineEvent[] = [
    {
      id: 1,
      date: '2023-01-01',
      title: 'First Event',
      location: 'Location A',
      icon: <span>Icon A</span>,
      latest: true,
    },
    {
      id: 2,
      date: '2023-02-01',
      title: 'Second Event',
      location: 'Location B',
      icon: <span>Icon B</span>,
    },
  ];