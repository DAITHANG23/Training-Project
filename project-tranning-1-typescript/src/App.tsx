
import './App.css';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CountryList from './components/CountryList/CountryList';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Typography variant='h3'>Country selection</Typography>
        <Typography variant='body1' sx={{ paddingTop: "40px" }} >Please select your registered country or region: </Typography>
        <CountryList />
      </Container>
    </div>
  );
}

export default App;
