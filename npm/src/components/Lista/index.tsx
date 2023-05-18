import React from "react";
import style from "./Lista.module.scss";
import { Item } from "./item";
export const Lista = () => {
  const tarefas = [{
    tarefa: 'react',
    tempo: '02:00'
  }, {
    tarefa: 'java',
    tempo: '03:00'
  }
  ]
  return (
    <>
      <aside className={style.listaTarefa}>
        <h2>Estudos do dia</h2>
        <ul className={style.item}>
          {tarefas.map((items, index)=>(
            <Item
            key={index}
             {...items}/>
          ))}
          <Item tarefa="jogar" tempo="00:00" />
        </ul>
      </aside>
    </>
  );
};
