import React from "react";
import { ButtonComponent } from "./style";

interface ButtonProps {
  title: string;
  icon?: React.ReactElement;
  onClick: Function;
}

export function Button(props: ButtonProps) {
  const { onClick, title, icon } = props;

  return (
    <>
      <ButtonComponent onClick={() => onClick()}>{icon} <p>{title}</p></ButtonComponent>
    </>
  );
}
