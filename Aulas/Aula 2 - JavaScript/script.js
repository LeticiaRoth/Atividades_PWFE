// Três elementos Contador, Condição de Saída e Iterador

console.log("FOR")
//Exemplo FOR
let cats = ["Kuromi", "Kitty", "Purim", "Roll"];
let info = "My cats are called ";

//Volta ele colocando dentro da info até acabar o tamanho da lista
for (let i = 0; i < cats.length; i++){
    info += cats[i] + ", ";
}
console.log("EXEMPLO FOR:", info);

//Prático FOR
let cachorros = ["Lola", "Amora", "Luna", "Bob"];
let frase = "Eu adoro o ";

for (let i = 0; i < cats.length; i++){
    frase += cachorros[i] + ", "
}
console.log("PRÁTICO FOR:", frase);

//Console de separação de linhas
console.log("")

console.log("WHILE")
//Exemplo WHILE
let gatos = ["Kuromi", "Kitty", "Purim", "Roll"];
let completo = "My cats are called ";
let i = 0;

while (i < gatos.length){
    if (i == gatos.length - 1){
        completo += "e " + gatos[i] + "."
    }else{
        completo += gatos[i] + ", "
    }
    i++;
}
console.log("EXEMPLO WHILE:", completo);


//Console de separação de linhas
console.log("");

console.log("DO WHILE");
//Exemplo DO WHILE
//So válida depois que faz todas as verificações, faça enquanto

let caes = ["Kuromi", "Kitty", "Purim", "Roll"];
let fraseCompleta = "My cats are called ";
let indice = 0;

do {
    if (indice === gatos.length - 1) {
        fraseCompleta += "e " + gatos[indice] + ".";
    } else {
        fraseCompleta += gatos[indice] + ", ";
    }
    indice++;
} while (indice < gatos.length);

console.log(fraseCompleta);


//Console de separação de linhas
console.log("");

//Explicação de Funções
//Embutidas no navegador, um bloco de código reutilizável que pode ser executado quando chamado;
//Para usar uma função devemos fazer a declaraçãio dela, com a seguinte sintaxe;
//function name(){}
console.log("FUNÇÕES");
//Função sem paramentro;
function helou(){
    console.log("Função sem parametro: HELOU AMIGO");
}
helou();

//Função anônima
// São funçõe sem nome, executadas no momento da execução do código, chamada apenas onde está;
//Declaradas como conteúdo de uma variável;
const subtrair = function(N1, N2){
    let resultado = N1 - N2
    console.log("Função anônima",resultado)
}
subtrair(4,2);

//Arrow Function
//Forma concisa de escrever uma função em JS, otimiza a escrita, deixando limpo e enxuto;
//