import React from 'react';
import Typical from 'react-typical';


export const Intro: React.FC = (): JSX.Element => {

	const title: string = 'Sireesha Dadi';

	return (
		<div>
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
		</div>

	);
};