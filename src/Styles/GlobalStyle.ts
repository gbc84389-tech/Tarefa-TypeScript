import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #F5F5DC;
    font-family: 'Arial', sans-serif;
    color: #333;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle