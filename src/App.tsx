import './App.css';
import  Intro  from './components/Intro';
import PersonalTimeline from './components/PersonalTimeline';
import Skills from './components/Skills';
import { PersonalDetails} from './lib/MyProps';
import { Grid } from '@mui/material';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Intro/>

        <Skills skills={PersonalDetails.Skills}/>

        <Grid container mt={8} spacing={2}>
          <Grid item xs={12} md={6}>
            <PersonalTimeline data={PersonalDetails.WorkExp} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PersonalTimeline data={PersonalDetails.Education} />
          </Grid>

        </Grid>

      </header>
    </div>
  );
}

export default App;
