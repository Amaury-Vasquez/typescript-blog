import React, { Fragment, ReactElement } from 'react';

import {Header} from "../Header";

export const Layout = (props: {children: ReactElement}) => {
  return <Fragment>
    <Header></Header>
    {props.children}
  </Fragment>
}