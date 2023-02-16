import React from "react";

import { CalculatorFrame } from "@/components/calculator/frame";
import { Theme } from "@/components/theme";
import { Main } from "@/components/main";

export function App() {
  return (
    <Theme>
      <Main>
        <CalculatorFrame />
      </Main>
    </Theme>
  );
}
