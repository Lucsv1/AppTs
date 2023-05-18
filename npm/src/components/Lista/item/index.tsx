import style from "../Lista.module.scss"

export const Item = (props: { tarefa: string; tempo: string }) => {
    const {tarefa, tempo } = props;
  return (
    <li className={style.item}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
};
