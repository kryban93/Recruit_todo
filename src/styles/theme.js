import { Flex } from '@theme-ui/components';

const theme = {
  fonts: {
    body: 'system-ui,roboto, sans-serif',
    heading: 'Titillium Web, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  lineHeights: {
    body: 1.5,
    heading: 1.75,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#a9f1df',
    secondary: '#233e8b',
    grey: '#e1e5ea',
  },
  buttons: {
    primary: {
      bg: '#fff',
      cursor: 'pointer',
    },
    search: {
      bg: 'grey',
      cursor: 'pointer',
      height: '35px',
      borderRadius: '0px 25px 25px 0px',
      display: 'flex',
      alignItems: 'center',
    },
  },
  forms: {
    input: {
      bg: 'grey',
      border: 'none',
      outline: 'none',
      borderRadius: '25px 0px 0px 25px',
      height: '35px',
      width: '60%',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
};

export default theme;
