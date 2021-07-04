import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: "Lato", "Helvetica Neue", sans-serif;    

    /* Adjust font size */
    font-size: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1;

    /* Smoothing */
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;

    /* Font varient */
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;

    background-color: #edeeef;
  }

  body.font-loaded {
    font-family: "Noto Sans KR", "Helvetica Neue", sans-serif;
  }

  button,
  input,
  select,
  textarea {
    font-family: "Lato", "Helvetica Neue", sans-serif;
  }

  .font-loaded input,
  .font-loaded select,
  .font-loaded button,
  .font-loaded textarea {
    font-family: "Noto Sans KR", "Helvetica Neue", sans-serif;
  }

  input[type="password"] {
    font-family: "Helvetica Neue", sans-serif;
    ime-mode: disabled;
  }

  #app {
    height: 100vh;
  }
`;

export default GlobalStyle;
