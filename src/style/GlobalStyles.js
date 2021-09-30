import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "BMJUA", sans-serif;
  }

  a, a:active, a:hover, a:visited {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  
  button {
    border: 0;
    padding: 0;
    background: none;
    outline: none;
    cursor: pointer;
  }
  
`;

export default GlobalStyles;
