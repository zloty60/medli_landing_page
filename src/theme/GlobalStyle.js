import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: ${({ theme }) => theme.font.sansSerif}; 
    background-color: ${({ theme }) => theme.color.bodyBg};
    font-weight:400;
  }
 
  ul {
    padding-inline-start: 0px;
  }

  li {
    list-style-type: none;
  }

`;
