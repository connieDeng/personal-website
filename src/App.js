import { useState } from "react";
import Splash from "./components/main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import GlobalFonts from "./assests/fonts/fonts";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalFonts />
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
