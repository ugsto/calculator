import React, { useState } from "react";
import styled from "styled-components";

import { CalculatorDisplay } from "@/components/calculator/display";
import { CalculatorButton } from '@/components/calculator/button';
import { SkipBack } from "react-feather";

export function CalculatorFrame() {
  const [value, setValue] = useState("0" as string);
  const [buffer, setBuffer] = useState<string | null>(null);
  const [operator, setOperator] = useState("" as string); // ["", "+", "-", "*", "/"]
  const [isBuffered, setIsBuffered] = useState(false as boolean);

  function handleAppendNumber(newValue: string) {
    if (value === "0" || isBuffered) {
      setValue(newValue);
      setIsBuffered(false);
    } else {
      setValue(value + newValue);
    }
  }

  function handleBackspace() {
    if (value.length === 1) {
      setValue("0");
      return;
    }
    setValue(value.slice(0, -1));
  }

  function sum(a: string, b: string) {
    console.log(`sum(${a}, ${b})`);
    return (parseFloat(a) + parseFloat(b)).toString();
  }

  function subtract(a: string, b: string) {
    console.log(`subtract(${a}, ${b})`);
    return (parseFloat(a) - parseFloat(b)).toString();
  }

  function multiply(a: string, b: string) {
    console.log(`multiply(${a}, ${b})`);
    return (parseFloat(a) * parseFloat(b)).toString();
  }

  function divide(a: string, b: string) {
    console.log(`divide(${a}, ${b})`);
    return (parseFloat(a) / parseFloat(b)).toString();
  }

  function evalOperation(operator: string) {
    if (buffer === null) {
      return value;
    }

    switch (operator) {
      case '+':
        return sum(buffer, value);

      case '-':
        return subtract(buffer, value);

      case '*':
        return multiply(buffer, value);

      case '/':
        return divide(buffer, value);

      default:
        return value;
    }
  }

  function handleOperator(operator: string) {
    setOperator(operator);
    if (isBuffered) {
      return;
    }

    const result = evalOperation(operator);
    setBuffer(result);
    setIsBuffered(true);
  }

  function handleEquals() {
    const result = evalOperation(operator);
    setValue(result);
    setBuffer(null)
    setIsBuffered(false);
  }

  function handleClear() {
    setValue("0");
    setBuffer(null);
    setOperator("");
    setIsBuffered(false);
  }

  return (
    <Frame>
      <CalculatorDisplay value={value} />
      <Separator />
      <ButtonRow>
        <CalculatorButton value="CE" onClick={handleClear} />
        <CalculatorButton value="" icon={<SkipBack />} onClick={handleBackspace} />
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton value="+" onClick={handleOperator} />
        <CalculatorButton value="-" onClick={handleOperator} />
        <CalculatorButton value="*" onClick={handleOperator} />
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton value="/" onClick={handleOperator} />
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton value="1" onClick={handleAppendNumber} />
        <CalculatorButton value="2" onClick={handleAppendNumber} />
        <CalculatorButton value="3" onClick={handleAppendNumber} />
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton value="4" onClick={handleAppendNumber} />
        <CalculatorButton value="5" onClick={handleAppendNumber} />
        <CalculatorButton value="6" onClick={handleAppendNumber} />
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton value="7" onClick={handleAppendNumber} />
        <CalculatorButton value="8" onClick={handleAppendNumber} />
        <CalculatorButton value="9" onClick={handleAppendNumber} />
      </ButtonRow>
      <ButtonRow>
        <CalculatorButton value="0" onClick={handleAppendNumber} />
        <CalculatorButton value="." onClick={handleAppendNumber} />
        <CalculatorButton value="=" onClick={handleEquals} />
      </ButtonRow>
    </Frame>
  );
}

const Frame = styled.div`
  min-width: ${({ theme }) => theme.width.frame.min};
  max-width: ${({ theme }) => theme.width.frame.max};
  min-height: ${({ theme }) => theme.height.frame.min};
  max-height: ${({ theme }) => theme.height.frame.max};

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.frame};
  border: 1px solid ${({ theme }) => theme.color.frameBorder};
  border-radius: ${({ theme }) => theme.borderRadius.frame};

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: ${({ theme }) => theme.gap[3]};

  overflow: hidden;
`;

const Separator = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: ${({ theme }) => theme.gap[2]};
  margin-bottom: ${({ theme }) => theme.gap[2]};
`;
