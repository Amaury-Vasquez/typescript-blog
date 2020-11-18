import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const MenuContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 8vh;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin-right: 3vw;
    font-size: 18px;
    color: var(--white);
    &:hover {
      & > svg {
        transform: scale(1.4);
        cursor: pointer;
      }
    }
  }
`;

export const Link = styled(LinkRouter)`
  padding: 5px;
  font-size: 16px;
  text-align: center;
`;
