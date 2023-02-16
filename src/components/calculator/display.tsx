import React from "react";
import styled from "styled-components";

interface CalculatorDisplayProps {
  value: string;
}

export function CalculatorDisplay(props: CalculatorDisplayProps) {
  return <Display>{props.value}</Display>;
}

const Display = styled.div`
  min-width: ${({ theme }) => theme.width.display.min};
  max-width: ${({ theme }) => theme.width.display.max};
  min-height: ${({ theme }) => theme.height.display.min};
  max-height: ${({ theme }) => theme.height.display.max};

  background-color: ${({ theme }) => theme.color.display};
  font-size: ${({ theme }) => theme.fontSize.display};
  color: ${({ theme }) => theme.fontColor.display};
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-weight: ${({ theme }) => theme.fontWeight.display};
  font-size: ${({ theme }) => theme.fontSize.display};
  text-align: right;

  padding: ${({ theme }) => theme.gap[3]};
`;
