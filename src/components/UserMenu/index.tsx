import React from "react";

import { Menu, Message, Button, Input } from "./styles";

export const UserMenu = () => {
  return (
    <Menu>
      <Message>{"Inicio de sesion"}</Message>
      <Input placeholder="email" type="text"></Input>
      <Input placeholder="password" type="password"></Input>
      <Button> {"Iniciar sesion"} </Button>
      <Message>{"Registro"}</Message>
      <Input placeholder="email" type="text"></Input>
      <Input placeholder="password" type="password"></Input>
      <Button> {"Registrarse"} </Button>
    </Menu>
  );
};
