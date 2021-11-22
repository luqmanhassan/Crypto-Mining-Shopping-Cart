import './styles/index.css';
import {useNavigate} from 'react-router-dom';
import Cart from './cart.js';
import Nav from './nav.js';
import {Grid, Button, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import image from './images/board.jpg';
const theme = createTheme({
  palette: {
    primary: {
      main: '#31a0ff',
    },
    secondary: {
      main: '#f8fdff',
    },
  },
  typography: {
    fontFamily: ['Times New Roman', 'Arial', 'sans-serif'].join(','),
  },
});
const App = () => {
  let navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        className="App"
        sx={{
          height: '750px',
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Cart />
        <Nav home />

        <Grid item align="center">
          <Typography
            variant="h2"
            sx={{
              mx: '300px',
              textShadow: '0px 10px 5px black, -10px 5px 10px white',
              color: 'secondary.main',
              my: '50px',
            }}
          >
            Electronic Repair Parts For Cheap
          </Typography>
        </Grid>
        <Grid item align="center">
          <Button
            variant="contained"
            sx={{fontSize: '25px', color: 'black', bgcolor: 'white'}}
            onClick={() => {
              navigate(`/shop`);
            }}
          >
            Shop Now
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
