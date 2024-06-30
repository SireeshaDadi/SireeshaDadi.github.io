import { Box, Grid, Typography } from '@mui/material';
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


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginY={8}>
          <Grid item xs={6}>
            <Box ml={10} m={20}>
            <Typography variant='subtitle1'>
            9+ years deep in coding! I'm a full-stack developer (React, Java) conjuring innovative solutions. From sparkling clean code to seamless API connections,
             I manage the entire SDLC and ensure top performance through testing (unit, integration, A/B, you name it!).
             My Master's in CS with a twist (drone control with wearables!) showcases my passion for creative problem-solving.
              </Typography>
            </Box>
             
          </Grid>
          <Grid item xs={6}>
             
        <img
               height={600}
                src={intro}
                alt="Intro illustratopm"
              />
          </Grid>

        </Grid>
       
		</Box>

	);
};