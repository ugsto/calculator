import React from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "@/assets/theme";

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
