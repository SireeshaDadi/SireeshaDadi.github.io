import React from 'react';
import { Typography, Box } from '@mui/material';
import { PersonalTimelineEvents, TimelineEvent } from './PersonalTimelineEvents';

export type PersonalTimelineData = {
  events: TimelineEvent[];
  title: string;
  position?: 'left' | 'right' | 'alternate'; 
}

export type PersonalTimelineProps = {
    data : PersonalTimelineData
};


export const PersonalTimeline: React.FC<PersonalTimelineProps> = ({data}) => {
  const {events, title, position} = data;

  return (
    <Box>
      <Typography variant="h3" align="center" gutterBottom>
        {title}
      </Typography>
      <PersonalTimelineEvents events={events} position={position}/>
    </Box>
  );
}

export default PersonalTimeline;
