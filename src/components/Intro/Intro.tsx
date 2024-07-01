import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Typical from 'react-typical';
import introImage from '../../assets/introImage.png';


export type IntroData = {
  title: string;
  roles:Array<string | number>;
  intro: string;
}

export type IntroProps = {
  data : IntroData;
}


export const Intro: React.FC<IntroProps> = ({data}): JSX.Element => {

	const {title, roles, intro} = data;

	return (
		<Box>
      <h1>Hello! I am {title}!</h1>
			<Typical
        steps={roles}
        loop={Infinity}
        />


<Grid container spacing={2}>
    {/* Grid item for text content */}
    <Grid item xs={12} md={6}>
      <Box sx={{ p: 2 }}>
        <Typography variant='subtitle1'>
         {intro}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant='contained'>Resume</Button>
        </Box>
      </Box>
    </Grid>

    {/* Grid item for the image */}
    <Grid item xs={12} md={6}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          style={{ height: 'auto', maxWidth: '100%' }}
          src={introImage}
          alt="Introduction illustration"
        />
      </Box>
    </Grid>
  </Grid>
   
		</Box>

	);
};