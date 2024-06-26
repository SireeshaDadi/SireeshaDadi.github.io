

import React from 'react';
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';

export const App: React.FC = ()=> {
	return (
		<>
      <Home/>	
	  <Skills/>
    </>
	);
};

export default App;
