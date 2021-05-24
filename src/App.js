import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { setConfiguration } from "react-grid-system";

import { GlobalStyle } from "./theme/GlobalStyle";
import { mainTheme } from "./theme/mainTheme";
import { RootView } from "./views/RootView";

setConfiguration({ gutterWidth: 48, breakpoints: mainTheme.breakpoints });

function App() {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={mainTheme}>
        <>
          <GlobalStyle />
          <RootView />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
