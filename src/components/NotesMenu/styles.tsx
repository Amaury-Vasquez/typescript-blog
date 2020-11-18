import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Menu = styled.div`
  width: 16vw;
  min-height: 20vh;
  background-color: var(--white);
  padding: 10px;
  @media screen and (max-width: 500px) {
    width: 40vw;
  }
`;

export const Link = styled(LinkRouter)`
  font-size: 16px;
`;

export const Title = styled.p`
  font-size: 18px;
  color: var(--black);
  text-align: center;
  font-weight: 500;
`;

export const NoteLink = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 10vh;
  align-items: center;
  color: var(--black);
  & > svg {
    font-size: 30px;
    margin: 0 auto;
  }
  &:hover {
    background-color: var(--rgba-red);
  }
`;

export const NoteTitle = styled.span`
  font-size: 16px;
  width: 100%;
  text-align: center;
`;
