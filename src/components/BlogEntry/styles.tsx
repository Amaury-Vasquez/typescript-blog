import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

import { fadeIn } from "../../styles/animation";

export const Link = styled(LinkRouter)`
  width: 100%;
  min-height: 46vh;
  height: auto;
  box-sizing: border-box;
  padding: 15px;
  background-color: var(--white);
  box-shadow: var(--shadow);
`;

export const Image = styled.img`
  ${fadeIn()};
  width: 100%;
  height: 35vh;
`;

export const Description = styled.p`
  margin-top: 2vh;
  color: var(--black);
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
`;
