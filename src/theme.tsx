import { PaletteColor, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const tools = createTheme();
// black
const primary = tools.palette.augmentColor({ color: { main: "#000000" } });
// grey
const secondary = tools.palette.augmentColor({ color: { main: "#e3e3e3" } });
// blue
const highlight = tools.palette.augmentColor({ color: { main: "#3F7CAC" } });
// white
const bodytext = tools.palette.augmentColor({ color: { main: "#ffffff" } });

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary,
    secondary,
    highlight,
    bodytext,
    error: {
      main: red.A400,
    },
    background: {
      default: "#162B3C",
    },
  },
  typography: {
    fontFamily: ' "Montserrat", "Lato", "sans serif"',
    fontSize: 23,
    button: {
      fontFamily: ' "Lato", "Montserrat", "sans serif"',
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: primary.main,
        },
      },
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    highlight: PaletteColor;
    bodytext: PaletteColor;
  }
  interface PaletteOptions {
    highlight: PaletteColor;
    bodytext: PaletteColor;
  }
}
