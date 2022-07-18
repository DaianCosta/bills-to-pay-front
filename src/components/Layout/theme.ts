import { createTheme } from '@mui/material/styles';
import { deepOrange, green } from '@mui/material/colors';

const theme = createTheme({
  
  palette: {
    mode: 'light',
    background: {
      default: '#eceff1',
    
    },
    /*
    primary: {
      main: green.A700,
    },
    secondary: {
      main: '#ff6666',
    },*/
  },
  /*
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#212121',
        },
      },
    },
  }*/
});

export default theme;