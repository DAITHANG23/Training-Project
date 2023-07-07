import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#5954E9',
            contrastText: '#0d6efd'
        },
        background:{
            default:'#F2F3FA',
            paper:'#FFF'
        } ,
        text: {
           secondary:  '#FFF', 
        },

        secondary: {
            main: '#CED0D6',
              
        },
    }
});

export default theme;