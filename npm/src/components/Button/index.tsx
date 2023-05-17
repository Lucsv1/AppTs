import React, { useState } from "react";
import style from './style.module.scss'

export const Button = () => {
  const [lista, setLista] = useState([])

  return (
    <>
      <button className="botao">Botao</button>
    </>
  );
};
