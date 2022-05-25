import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    custom: {
      font: string;
      background: string;
      header: string;
    };
  }
  interface CustomThemeOptions extends ThemeOptions {
    custom?: {
      font?: string;
      background?: string;
      header?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

const primary = '#069def';
const secondary = '#f25f5c';
const black = '#12181b';
const white = '#fefefe';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  custom: {
    font: black,
    background: white,
    header: '#F5F4F5',
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
  },
  custom: {
    font: white,
    background: black,
    header: '#1f2326',
  },
});

export { lightTheme, darkTheme };
