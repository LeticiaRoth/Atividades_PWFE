//Cuida dos estados do botões e dos outros componentes, uma função dentro do React que funciona através de estados;
import { useState } from "react"

export default function Quadrado({value, onQuadrado}){

    //Passo como props que a primeria ideia que surge para mudança de estado
    return <button className="quadrado" onClick={onQuadrado} >
        {value}</button>
}