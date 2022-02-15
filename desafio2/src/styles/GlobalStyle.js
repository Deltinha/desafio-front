import { createGlobalStyle } from 'styled-components';
import Theme from './Theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Theme.background};
    font-family: 'Roboto Condensed', sans-serif;
  }`;

export default GlobalStyle;
