import { createTheme } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';
import type {} from '@mui/lab/themeAugmentation';

declare module '@mui/material/Button/Button' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ButtonPropsColorOverrides {
    default: true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

declare module '@mui/material/IconButton' {}

declare module '@mui/material/TextField' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TextFieldPropsSizeOverrides {
    M: true;
  }
}

declare module '@mui/material/Autocomplete' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface AutocompletePropsSizeOverrides {
    M: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    default: Palette['primary'];
  }

  interface PaletteOptions {
    default: Palette['primary'];
  }
}

const MuiTheme = createTheme({
  typography: {
    fontFamily: [
      'Onest',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 10,
  },
  palette: {
    default: {
      main: '#E0E0E0',
      light: '#F4F6F8',
      dark: '#212B36',
      contrastText: '#1F2224', // grey-primary
    },
    primary: {
      main: '#3A86AE', // --color-ocean-blue
      contrastText: '#FFFAF1', // --color-warm-beige-lighter
    },
    info: {
      main: '#2E90FA', // ----color-calming-green
      contrastText: '#FFFAF1', // --color-warm-beige-lighter
    },
    secondary: {
      main: '#1f6969', // --color-calming-green-darker
      contrastText: '#FFF',
    },
    success: {
      main: '#4CAF50',
      contrastText: '#FFF',
    },
    error: {
      main: '#D43C32',
      contrastText: '#FFF',
    },
    warning: {
      main: '#FF9800',
      contrastText: '#FFF',
    },
    grey: {
      '100': '#F9FAFB',
      '200': '#F4F6F8',
      '300': '#DFE3E8',
      '400': '#C4CDD5',
      '500': '#919EAB',
      '600': '#637381',
      '700': '#454F5B',
      '800': '#212B36',
      '900': '#161C24',
    },
    text: {
      primary: '#1F2224',
      secondary: '#1F222429',
    },
  },
});

export default MuiTheme;
