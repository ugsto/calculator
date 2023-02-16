import React from "react";
import styled from "styled-components";

interface CalculatorButtonProps {
  value: string;
  icon?: React.ReactNode;
  onClick: (value: string) => void;
}

export function CalculatorButton(props: CalculatorButtonProps) {
  return (
    <Button onClick={() => props.onClick(props.value)}>
      {props.icon ? props.icon : <span>{props.value}</span>}
    </Button>
  );
}

const Button = styled.button`
  min-width: ${({ theme }) => theme.width.button.min};
  max-width: ${({ theme }) => theme.width.button.max};
  min-height: ${({ theme }) => theme.height.button.min};
  max-height: ${({ theme }) => theme.height.button.max};

  background-color: ${({ theme }) => theme.color.button};
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  color: ${({ theme }) => theme.color.buttonText};
  font-size: ${({ theme }) => theme.fontSize.button};
  font-weight: ${({ theme }) => theme.fontWeight.button};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  display: block;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.gap[2]};

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.buttonActive};
  }
`;
