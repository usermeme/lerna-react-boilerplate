import * as React from "react";
import { ThemeProvider as StyleComponentThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "configs/theme";
import { useLocalStorage } from "hooks";
import { Enums } from "types";
import { ThemeContext } from "./duck";

const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useLocalStorage<Enums.ThemeName>(
    "THEME",
    "light"
  );

  const currentTheme = { light: lightTheme, dark: darkTheme }[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyleComponentThemeProvider theme={currentTheme}>
        <MUIThemeProvider theme={currentTheme}>{children}</MUIThemeProvider>
      </StyleComponentThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
