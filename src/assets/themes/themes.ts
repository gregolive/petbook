import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    custom: {
      font: string;
      background: string;
      highlight: string;
      shadow: string;
      commentField: string;
    };
  }
  interface CustomThemeOptions extends ThemeOptions {
    custom?: {
      font?: string;
      background?: string;
      highlight?: string;
      shadow?: string;
      commentField?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
};

const primary = '#069def';
const secondary = '#f25f5c';
const white = '#fefefe';
const whiteAlt = '#F5F4F5';
const black = '#12181b';
const blackAlt = '#1f2326';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    background: {
      paper: whiteAlt,
    },
  },
  custom: {
    font: black,
    background: white,
    highlight: whiteAlt,
    shadow: 'rgba(18, 24, 27, 0.1)',
    commentField: 'rgb(235, 236, 238)',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    background: {
      paper: blackAlt,
    },
  },
  custom: {
    font: white,
    background: black,
    highlight: blackAlt,
    shadow: 'rgba(254, 254, 254, 0.1)',
    commentField: 'rgb(58, 59, 60)',
  },
});

export { lightTheme, darkTheme };
