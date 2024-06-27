import { Box } from '@mui/material';
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
        
        <img
               height={600}
                src={intro}
                alt="Intro illustratopm"
              />
		</Box>

	);
};