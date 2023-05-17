import React, { useState } from "react";
import { Button } from "../Button";

export const Formulario = () => {
  const [tarefa , setTarefa] = useState("");
  const [tempo, setTempo] = useState("");

  return (
    <>
      <form action="">
        <label htmlFor="tarefa"></label>
        <input
          value={tarefa}
          onChange={(txt) => {
            setTarefa(txt.target.value);
          }}
          type="text"
          name="tarefa"
          id="tarefa"
          required
        />
        <label htmlFor="tempo"> Tempo</label>
        <input
          value={tempo}
          onChange={(txt) => {
            setTempo(txt.target.value);
          }}
          type="time"
          step='1'
          name="tempo"
          id="tempo"
          min='00:00:00'
          max='01:30:00'
          required
        />
        <Button />
      </form>
    </>
  );
};
