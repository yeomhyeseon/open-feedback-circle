import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <MainRouter />
    </ThemeProvider>
  );
};

export default App;
