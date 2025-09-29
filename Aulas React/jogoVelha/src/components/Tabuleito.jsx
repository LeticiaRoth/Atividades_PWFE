import { useState } from "react";
import Quadrado from "./Quadrado";

export default function Tabuleiro(){

    //Saber quais quadradinhos estão sendo marcados
    //Cria um array com nove posiçlões nulas
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    //Preciso fazer essa ser lembrada uso useState para manter a memoria da variavel
    const [xProximo, setXproximo] = useState(true);



    //Função para mandar a função
    function handleClick(i){
        //
        if(venceu || quadrados[i]){
            return;
        }

        //Cria uma cópia da constante, pois o slice está vazio
        //Tudo seria renderizado
        const nextQuadrado = quadrados.slice();
        
        if (xProximo){
            //Começa com o X
            nextQuadrado[i]= "X";
        }else{
            nextQuadrado[i] = "O"
        }
        //Usando True ou false, não preciso saber o lugar de onde está sendo clicado
        setQuadrados(nextQuadrado);
        setXproximo(!xProximo);
    }


    const venceu = vencedor(quadrados);
    //Não importa quardar o valoor dele
    let status;
    if (venceu){
        status = "Vencedor é: " + venceu;
        //Verifica se há quadrados com valor null ainda
        }else if (quadrados.includes(null)){
            status = "O próximo jogador é: " + (xProximo ? "X":"O")
        }else{
            status="VELHA";
        }




    return(
        //Importo o componente que criei como quadrado para criar ele dentro do tabuleiro
        //Arrow function faz o sistema esperar o clique
        <>
            <div className="tabuleiro">
                <div id="titulo">{status}</div>
                <div className="linha">
                    <Quadrado value={quadrados[0]} onQuadrado ={()=> handleClick(0)}/>
                    <Quadrado value={quadrados[1]} onQuadrado ={()=> handleClick(1)}/>
                    <Quadrado value={quadrados[2]} onQuadrado ={()=> handleClick(2)}/>
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[3]} onQuadrado ={()=> handleClick(3)}/>
                    <Quadrado value={quadrados[4]} onQuadrado ={()=> handleClick(4)}/>
                    <Quadrado value={quadrados[5]} onQuadrado ={()=> handleClick(5)}/>
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[6]} onQuadrado ={()=> handleClick(6)}/>
                    <Quadrado value={quadrados[7]} onQuadrado ={()=> handleClick(7)}/>
                    <Quadrado value={quadrados[8]} onQuadrado ={()=> handleClick(8)}/>
                </div>
            </div>
        </>
    )

    function vencedor(quadrados){
        const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
        for (let i = 0; i < linhas.length; i++){
            const [a,b,c] = linhas[i];
            if (quadrados [a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]){
                return quadrados[a];
            }
        }

        return null;
    }
}