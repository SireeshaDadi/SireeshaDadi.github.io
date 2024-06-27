import './App.css';
import  Intro  from './components/Intro';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
        <Skills/>
      </header>
    </div>
  );
}

export default App;
