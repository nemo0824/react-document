import React, { useState } from "react";
import { Form } from "./Form";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./ThemeContext";

export const Context = () => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <ThemeContext value={theme}>
      <button
        onClick={() => {
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        }}
      >
        theme 토글
      </button>
      <Form />
    </ThemeContext>
  );
};
