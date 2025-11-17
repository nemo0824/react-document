import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Panel = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const theme = useContext(ThemeContext);
  const className = "" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h3>{theme}</h3>
      {children}
    </section>
  );
};
