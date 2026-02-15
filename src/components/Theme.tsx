import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Nunito Sans", sans-serif', // default body
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        h1: { fontFamily: '"Fraunces", serif', fontWeight: 700 },
        h2: { fontFamily: '"Fraunces", serif', fontWeight: 400 },
        html: { height: "100%" },
        body: { minHeight: "100%", backgroundColor: "#EEE2CF" },
        "#root": { minHeight: "100%" },
      },
    },
  },
});