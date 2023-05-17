import React from "react";
import style from './style.module.scss'
export const Lista = () => {
  return (
    <>
      <aside className={style.listaTarefa}>
        <h2>Estudos do dia</h2>
        <ul className={style.item}>
          <li className={style.itemSelecionado}>
            <h3>React</h3>
            <span>02;00</span>
          </li>
          <li className={style.itemSelecionado}>
            <h3>java</h3>
            <span>1hora </span>
          </li>
        </ul>
      </aside>
    </>
  );
};
