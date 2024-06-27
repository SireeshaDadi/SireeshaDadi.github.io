import React from 'react';
import Typical from 'react-typical';
import Hello from '../assests/Hello.gif';
import { Box } from '@mui/material';


export const Intro: React.FC = (): JSX.Element => {

	const title: string = 'Sireesha Dadi';

	return (
		<Box>

          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p> <h1>Sireesha Dadi</h1>
    
   
			<Typical
        steps={[
            "Front End Developer",
              1000,
            "Full Stack Developer",
              1000,
            "Software Engineer",
              1000,
              ]}
              loop={Infinity}
        />
		</Box>

	);
};