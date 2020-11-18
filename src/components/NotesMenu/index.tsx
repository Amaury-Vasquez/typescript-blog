import React, { ReactElement } from "react";
import { Java, C, Javascript } from "../../svg/";

import { Menu, Link, NoteLink, Title, NoteTitle } from "./styles";

export const NotesMenu = () => {
  const Notes = (
    url: string = "/",
    icon: ReactElement,
    description: string = ""
  ) => {
    return (
      <Link to={url}>
        <NoteLink>
          {icon}
          <NoteTitle>{description}</NoteTitle>
        </NoteLink>
      </Link>
    );
  };
  return (
    <Menu>
      <Title>Apuntes</Title>
      {Notes("/", <Java />, "JAVA")}
      {Notes("/", <C />, "C/C++")}
      {Notes("/", <Javascript />, "Javascript")}
    </Menu>
  );
};
