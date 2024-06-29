
import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent, 
  TimelineProps
} from '@mui/lab';

import { Typography, Box } from '@mui/material';

export type TimelineEvent = {
    id: number;
    date: string;
    title: string;
    location: string;
    icon: React.ReactNode;
    latest?:boolean;
  };


type PersonalTimelineEventsProps = {
    events: TimelineEvent[];
    position?: 'left' | 'right' | 'alternate'; 
  };
  

  export const PersonalTimelineEvents: React.FC<PersonalTimelineEventsProps> = ({events, position}) => {
    return (
      <Box>
        <Timeline position={position}>
          {events.map((event) => (
            <TimelineItem key={event.id}>
              <TimelineOppositeContent variant="body2" color="text.secondary">
                {event.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={event.latest ? 'primary' : undefined}>
                  {event.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  {event.title}
                </Typography>
                <Typography>{event.location}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    );
  }