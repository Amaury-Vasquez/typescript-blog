import styled, { StyledFunction } from "styled-components";

interface Props {
  size?: string;
}

const icon: StyledFunction<Props & any> = styled.svg;

export const Svg = icon`
  width: ${(props) => (props.size ? props.size : "30px")};
  height: auto;
`;
