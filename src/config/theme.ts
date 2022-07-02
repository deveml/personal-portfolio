import { BreakpointsOptions, createTheme, PaletteOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { firaCode } from './default-font';

const typographyConfig: TypographyOptions = {
  fontFamily: 'Fira Code',
  h4: {
    fontWeight: 500,
    fontSize: '2rem',
  },
  h3: {
    fontWeight: 600,
    fontSize: '3rem',
  },
  h2: {
    fontWeight: 700,
    fontSize: '4rem',
  },
  h1: {
    fontWeight: 800,
    fontSize: '5rem',
  },
};

// TODO: Create toggle for dark and light theme
// TODO: Create definitions for dark and light theme
const paletteConfig: PaletteOptions = {
  background: {
    default: '#212121',
    paper: '#212121',
  },
  green: {
    main: '#00FF0A',
  },
  red: {
    main: '#FF5C00',
  },
  yellow: {
    main: '#FFE600',
  },
  orange: {
    main: '#FF5C00',
  },
  text: {
    primary: '#FFFFFF',
  },
  divider: '#c2c2c2',
  primary: {
    main: '#e8e8e8',
  },
  secondary: {
    main: '#949494',
  },
  info: {
    main: '#40a3ff',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#12b500',
  },
  error: {
    main: '#ff5959',
  },
  warning: {
    main: '#f7d454',
  },
};

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export const themeConfig = createTheme({
  typography: typographyConfig,
  palette: paletteConfig,
  direction: 'ltr',
  breakpoints,
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: firaCode,
    },
  },
});
