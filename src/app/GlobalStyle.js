import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: 'Saira Semi Condensed', sans-serif;
  }
`;

export default GlobalStyles;
