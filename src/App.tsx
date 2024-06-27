import './App.css';
import  Intro  from './components/Intro';
import Skills from './components/Skills';
import { WorkExp } from './components/WorkExp/WorkExp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
        <Skills/>
        <WorkExp/>
      </header>
    </div>
  );
}

export default App;
