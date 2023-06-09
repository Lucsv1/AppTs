import { Button } from "../Button"
import { Relogio } from "./Relogio"
import style from './Cronometro.module.scss'

export const Cronometro = () =>{
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>  
            </div>
            <Button title="começar"/>
        </div>
    )
}