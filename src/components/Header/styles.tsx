import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 8vh;
  max-height: 8vh;
  background-color: var(--main);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 5px;
`;

export const Left = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 8vh;
  grid-column: 1;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: var(--white);
  margin-left: 5vw;
  font-style: italic;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;
  grid-column: 3;
  box-sizing: border-box;
`;
