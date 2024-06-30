import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Typical from 'react-typical';
import intro from '../../assets/intro.png';




export const Intro: React.FC = (): JSX.Element => {

	const title: string = 'Sireesha Dadi';

	return (
		<Box>
      <h1>Hello! I am Sireesha!</h1>
			<Typical
        steps={[
            "Front End Developer",
              1000,
            "Full Stack Developer",
              1000,
            "Mobile Developer",
              1000,
              ]}
              loop={Infinity}
        />


<Grid container spacing={2}>
    {/* Grid item for text content */}
    <Grid item xs={12} md={6}>
      <Box sx={{ p: 2 }}>
        <Typography variant='subtitle1'>
          9+ years deep in coding! I'm a full-stack developer (React, Java) 
          conjuring innovative solutions. From sparkling clean code to seamless API connections,
           I manage the entire SDLC and ensure top performance through testing (unit, integration, A/B, you name it!). 
           My Master's in CS with a twist (drone control with wearables!) showcases my passion for creative problem-solving.
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
          src={intro}
          alt="Introduction illustration"
        />
      </Box>
    </Grid>
  </Grid>

        
       
		</Box>

	);
};