import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e50914",
    },
    secondary: {
      main: "rgba(128, 128, 128, 0.4)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          lineHeight: "24px",
          letterSpacing: "normal",
          fontWeight: 500,
          fontFamily: "Netflix Sans",
          fontSize: "16px",
          borderRadius: "4px",
      
        },
      },
    },
  },
});

export default theme;
