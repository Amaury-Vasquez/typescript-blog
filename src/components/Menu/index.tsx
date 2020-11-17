import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

import { MenuContainer } from "./styles";
import { DropDownMenu } from "../DropDownMenu";
import { UserMenu } from "../UserMenu";

export const Menu = () => {
  return (
    <MenuContainer>
      <DropDownMenu cover={FiSettings} content={UserMenu} />
      <DropDownMenu cover={FiSettings} content={UserMenu} />
      <DropDownMenu cover={FiSettings} content={UserMenu} />
      <DropDownMenu cover={FaUserCircle} content={UserMenu} />
    </MenuContainer>
  );
};
