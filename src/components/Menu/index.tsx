import React, { useState } from "react";
import { FaUserCircle, FaBookOpen } from "react-icons/fa";

import { MenuContainer } from "./styles";
import { DropDownMenu } from "../DropDownMenu";
import { UserMenu } from "../UserMenu";
import { NotesMenu } from "../NotesMenu";

export const Menu = () => {
  const [prevSetter, setSetter] = useState<Function>();
  const callback = (setter: Function) => {
    if (prevSetter) prevSetter(false);
    setSetter(() => setter);
  };
  return (
    <MenuContainer>
      <DropDownMenu
        callback={callback}
        cover={FaBookOpen}
        content={NotesMenu}
      />
      <DropDownMenu
        callback={callback}
        cover={FaUserCircle}
        content={UserMenu}
      />
    </MenuContainer>
  );
};
