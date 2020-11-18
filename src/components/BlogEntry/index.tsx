import React from "react";

import { Link, Image, Description } from "./styles";

interface BlogProps {
  src: string;
  alt: string;
  description: string;
}

export const BlogEntry = (props: BlogProps) => {
  return (
    <Link to="/">
      <Image src={props.src} alt={props.alt} />
      <Description> {props.description} </Description>
    </Link>
  );
};
