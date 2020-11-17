import React from "react";
import {Link} from "@reach/router";

import {Header as HeaderContainer, Left, Right} from "./styles";
import {Logo} from "../../svg/Logo/index";
import {Menu} from "../Menu";

export const Header = () => {
  return <HeaderContainer>
    <Left>
      <Link to="/">
        <Logo/>
      </Link>
    </Left>
    <Right>
      <Menu/>
   </Right>
  </HeaderContainer>
}