import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5954E9',
        },
        secondary: {
            main: '#CED0D6',
        },
        text: {
            main: '#0d6efd',
            card: '#FFF'
        },
        background:{
            main: '#F2F3FA',
            card: '#FFF',
            active: 'rgb(7, 206, 7)',
            inactive:'rgb(235, 154, 4)',
            iscoming: 'rgb(48, 47, 47)'
        },

    },

});

export default theme;