import React, { ReactNode, useContext, useState } from "react";

type ThemeModeContextType = {
  toggleTheme: () => void;
  actualTheme: string;
};

const ThemeContext = React.createContext<ThemeModeContextType>(
  {} as ThemeModeContextType
);

export const useThemeModeContext = (): ThemeModeContextType =>
  useContext(ThemeContext);

const ThemeModeProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [actualTheme, setActualTheme] = useState("light");

  const toggleTheme = () =>
    setActualTheme((currentValue) => {
      return currentValue === "dark" ? "light" : "dark";
    });

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        actualTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeModeProvider;
