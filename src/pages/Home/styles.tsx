import styled from "styled-components";

export const HomeContent = styled.div`
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1vw;
  box-sizing: border-box;
  padding: 3vw;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    &:last-child {
      margin-bottom: 5vh;
    }
  }
`;
