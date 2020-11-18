import React from "react";
import { Link } from "@reach/router";

import { Header as HeaderContainer, Left, Right, Title } from "./styles";
import { Menu } from "../Menu";

export const Header = () => {
  return (
    <HeaderContainer>
      <Left>
        <Link to="/">
          <Title>{"Blog de un programador"} </Title>
        </Link>
      </Left>
      <Right>
        <Menu />
      </Right>
    </HeaderContainer>
  );
};
