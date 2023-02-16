import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background};

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  border: 0;
`;
