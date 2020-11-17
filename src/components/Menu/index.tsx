import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

import { MenuContainer } from "./styles";
import { DropDownMenu } from "../DropDownMenu";
import { UserMenu } from "../UserMenu";

export const Menu = () => {
  const [prevSetter, setSetter] = useState<Function>();
  const callback = (setter: Function) => {
    if (prevSetter) prevSetter(false);
    setSetter(() => setter);
  };
  return (
    <MenuContainer>
      <DropDownMenu callback={callback} cover={FiSettings} content={UserMenu} />
      <DropDownMenu callback={callback} cover={FiSettings} content={UserMenu} />
      <DropDownMenu callback={callback} cover={FiSettings} content={UserMenu} />
      <DropDownMenu
        callback={callback}
        cover={FaUserCircle}
        content={UserMenu}
      />
    </MenuContainer>
  );
};
