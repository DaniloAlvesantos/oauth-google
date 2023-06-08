import React from "react";
import { CardComponent } from "./style";

export interface CardsProps {
  title: string;
  about: string;
  primary?: boolean;
  warn?:boolean;
}

export function Card(props: CardsProps) {
  const { title, about } = props;

  return (
    <CardComponent>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{about}</p>
      </main>
    </CardComponent>
  );
}
