import React from "react";
import {RouteComponentProps} from "@reach/router";

import {Content} from "../../styles/elements";
import {Div} from "./styles";

export const Home = (props: RouteComponentProps) => {
  return <Content>
    <Div>
    <h1>Home</h1>
    </Div>
  </Content>
}