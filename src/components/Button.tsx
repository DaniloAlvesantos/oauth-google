import React from "react";

interface ButtonProps {
  title:string;
  icon?:React.ReactElement;
  onClick:Function;
}

export function Button(props:ButtonProps) {
  const { onClick, title, icon } = props;
  
  return (
    <>
      <button onClick={() => onClick()}>{title}</button>
    </>
  );
}
