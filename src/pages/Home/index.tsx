import React from "react";
import { RouteComponentProps } from "@reach/router";

import { BlogEntry } from "../../components/BlogEntry";
import { Content } from "../../styles/elements";
import { HomeContent } from "./styles";

export const Home = (props: RouteComponentProps) => {
  return (
    <Content>
      <HomeContent>
        <BlogEntry
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
          description="Porque todos deberian aprender a programar"
          alt="coding"
        />
        <BlogEntry
          src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/article/public/RS7900_ThinkstockPhotos-899906850-hig.jpg?itok=QzJ0KH-k"
          description="Como la lectura puede cambiar tu vida"
          alt="reading"
        />
        <BlogEntry
          src="https://www.ajedrez21.com/img/cms/jugar-ajedrez.jpg"
          description="El ajedrez y sus beneficios"
          alt="Ajedrez"
        />
        <BlogEntry
          src="https://asociacioneducar.com/sites/default/files/styles/node_main/public/field/image/web-3086575.jpg?itok=1HFyAX7q"
          description="Crear contenido en vez de solo consumirlo"
          alt="creacion"
        />
        <BlogEntry
          src="https://image.freepik.com/vector-gratis/conjunto-hombres-mujeres-haciendo-ejercicio-gimnasio_1262-19905.jpg"
          description="La importancia de la actividad fisica"
          alt="Ejercicio"
        />
        <BlogEntry
          src="https://elcomercio.pe/resizer/TVrDO0fZpnbJuuQP5FPJPziHItA=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5PCQYU53GZFANOXGS453C3HC5E.jpg"
          description="10 lecciones que he aprendido de One Piece"
          alt="One Piece"
        />
      </HomeContent>
    </Content>
  );
};
