"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

const ThemeProviders: React.FC<Props> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeProviders;
