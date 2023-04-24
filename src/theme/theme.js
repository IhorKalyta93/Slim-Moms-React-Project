import { theme, extendTheme } from '@chakra-ui/react';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import { Button } from './components/Button';
import { customColors } from './colors';

const config = {
  initialColorMode: 'light',
};

const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1280px',
};

export const customTheme = extendTheme({
  config,
  breakpoints,
  fonts: {
    body: `'Verdana', sans-serif`, 
    primary: `'Verdana', sans-serif`, 
    secondary: `'Montserrat', sans-serif`, 
  },
  colors: {
    ...theme.colors,
    ...customColors,
  },
  components: {
    Button,
  },
});
