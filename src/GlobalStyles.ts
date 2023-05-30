import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.5;
  }

  /* Other global styles go here */
`;

export default GlobalStyles;
