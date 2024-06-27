import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box } from '@mui/material';

export const WorkExp: React.FC = (): JSX.Element => {

    return ( 
    <Box>
        <h3>My Timeline </h3>
        <Timeline position="alternate">
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        2011-2015
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          B.Tech in Computer Science
        </Typography>
        <Typography>Vignan, India</Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        2015-2017
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <WorkHistoryIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Software Developer
        </Typography>
        <Typography>Infosys, India</Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        2017-2018
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Masters in Computer Science
        </Typography>
        <Typography>University of South Florida, Tampa</Typography>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        2019-2021
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <WorkHistoryIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Software Developer 2
        </Typography>
        <Typography>Pasco county Sheriff's office, FL</Typography>
      </TimelineContent>
    </TimelineItem>


    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        2021-present
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color='primary'>
          <WorkHistoryIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          Software Engineer
        </Typography>
        <Typography>Indeed, FL</Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>

    </Box>
);
}




