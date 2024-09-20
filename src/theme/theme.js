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
          padding: "8px 16px",

          "@media (min-width:600px)": {
            fontSize: "14px",
          },
          "@media (min-width:960px)": {
            fontSize: "16px",
          },
          "@media (min-width:1280px)": {
            fontSize: "18px",
          },
          "@media (max-width:600px)": {
            padding: "6px 12px",
          },
        },
      },
    },
  },
});

export default theme;
