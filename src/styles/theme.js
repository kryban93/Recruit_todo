const theme = {
  fonts: {
    body: 'system-ui,roboto, sans-serif',
    heading: 'Titillium Web, sans-serif',
    additional: 'arial , sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 600,
    additional: 300,
  },
  fontSizes: [8, 14, 16, 20, 24, 32, 48, 64],
  lineHeights: {
    body: 1.5,
    heading: 1.75,
    additional: 1.25,
  },
  breakpoints: ['576px', '768px', '1024px', '1440px'],
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    title: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2,
    },
    additional: {
      fontFamily: 'additional',
      lineHeight: 'additional',
      fontWeight: 'additional',
      fontSize: 1,
    },
  },
  colors: {
    text: '#000',
    background: '#fafafa',
    primary: '#4cc790',
    secondary: '#1d9335',
    grey: '#e1e5ea',
    warning: '#f55c47',
    success: '#4cc790',
  },
  buttons: {
    primary: {
      bg: 'background',
      cursor: 'pointer',
      p: '0',
    },
    search: {
      bg: 'grey',
      cursor: 'pointer',
      height: '35px',
      borderRadius: '0px 5px 5px 0px',
      display: 'flex',
      alignItems: 'center',
    },
    add: {
      bg: 'primary',
      cursor: 'pointer',
      borderRadius: '5px',
      p: '0',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
  },
  forms: {
    input: {
      fontFamily: 'body',
      color: 'text',
      outline: 'none',
      border: 'none',
    },
    search: {
      fontFamily: 'body',
      color: 'text',
      bg: 'grey',
      border: 'none',
      outline: 'none',
      borderRadius: '5px 0px 0px 5px',
      height: '35px',
      width: '60%',
    },
    add: {
      fontFamily: 'body',
      color: 'text',
      bg: 'grey',
      border: 'none',
      outline: 'none',
      height: '35px',
      p: '10px',
    },
  },
  styles: {},
};

export default theme;
