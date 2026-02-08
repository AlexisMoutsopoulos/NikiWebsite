import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Box, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "./components/Theme";

const useStyles = makeStyles(() => ({
  appBg: {
    minHeight: "100vh",
    backgroundColor: "#efe3cc",
  },
}));

export const RootWrapper = () => {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
       <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className={classes.appBg}>
          <App />
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

createRoot(document.getElementById("root")!).render(<RootWrapper />);
