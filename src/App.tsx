import './App.css';
import  Intro  from './components/Intro';
import PersonalTimeline from './components/PersonalTimeline';
import Skills from './components/Skills';
import { PersonalDetails} from './MyProps';
import { Grid } from '@mui/material';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
        <Skills skills={PersonalDetails.Skills}/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginY={8}>
          <Grid item xs={6}>
            <PersonalTimeline data={PersonalDetails.WorkExp} />
          </Grid>
          <Grid item xs={6}>
            <PersonalTimeline data={PersonalDetails.Education} />
          </Grid>

        </Grid>

      </header>
    </div>
  );
}

export default App;
