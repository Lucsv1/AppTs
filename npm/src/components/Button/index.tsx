import React, { useState } from "react";
import style from "./Button.module.scss";

export const Button = (props: {title: string}) => {
  const {title } = props;
  const [lista, setLista] = useState([]);

  return (
    <>
      <button  className={style.botao}>{props.title}</button>
    </>
  );
};
