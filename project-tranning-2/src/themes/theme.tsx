import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#530F66",
      contrastText: "#E8ECEE",
    },
    background: {
      paper: "#FFF",
    },
    text: {
      secondary: "#909090",
      primary: "#55585B",
    },

    error: {
      main: "#E21350",
    },
  },
  spacing: [0, 12, 16, 32, 48, 56, 170],
});

export default theme;
