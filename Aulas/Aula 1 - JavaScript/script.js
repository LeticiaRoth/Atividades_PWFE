//console.log, escreve no console;
console.log("Bem vindo Letícia");

//posso declarar agora ou depois
var um = "uma";
let dois = "duas";

//const tem que declarar antes
const tres = 3;

//coloco o nome das variaveis dentro do console, para aparecer
console.log(um,dois,tres)

//Funciona, porém estamos usando defer, em casos normais ele mostra mesmo não definido
console.log(maria)
var maria = 4;

//alert aparece na tela como modal de alerta
//alert("Olá Bom dia!")

//Input para o usuario escrever
//prompt("Qual o seu nome?")

//Usando o prompt como declaração de variável
//let nome = prompt("Qual sua idade?")
//console.log("Eu tenho:", nome)

//Botão de ok na tela como confirmação
//confirm("Voce é do SENAI?")

//Input do usuário, vira uma variável booleana TRUE e FALSE
//let senai = confirm("Você é do SENAI?")
//console.log(senai)

//OperadoreS LÓGICOS e ARITMETICOS iguais em python

//Texto e numero são iguais, mesmo sendo texto
//IGUAL 
var numNum = 2;
var numText = "2";
console.log(numNum == numText);


//Agora o tipo pe reconhecido e dado como falso
//IGUAL DE VERDADE
var numNum = 2;
var numText = "2";
console.log(numNum === numText);


//DIFERENTE
var numNum = 2;
var numText = "2";
console.log(numNum != numText);

//Number força a entender que é um número
//let nota1 = Number (prompt("Digite a primeira nota:"));
//let nota2 = Number (prompt("Digite a segunda nota:"));
//let nota3 = Number (prompt("Digite a terceira nota:"));

//mediaAritmetica = (nota1 + nota2 + nota3) / 3;
//console.log("Média aritmética:", mediaAritmetica);

//Array
let arr = ["Maria", "Yasmin", "Layslla", "Julya"];
//Começa do 0, o indice
console.log(arr[1]);

//Criação de objeto no JS
let obg = {nome: 'Maria', idade: 6, profissao: "Bebê"};
//Mostrando todas as propriedades e valores
console.log(obg)
//Apenas o nome
console.log(obg.nome)

//Uma variável, se comportando como um array
let nome = "Leticia";
console.log(nome[0]);
//Função de charArt
console.log(nome.charAt(5));


let a = "A";
let b = "B";
let c = 25;
//Consigo ver qual é maior dentro do ABC 
console.log(a>b);
//Mostra o tipo da variável
console.log(typeof(a));

//Objeto não pode ser tranformado em to String
console.log(typeof(c.toString()));

//Printa como string mesmo
console.log(arr.toString());

//Tamanho do array, tanto para string quanto número
console.log(arr.length);

//Corta a palavra a partir do indice dela
console.log(nome.slice(5));

//Coloca tudo em minusculo
console.log(nome.toLowerCase());

//Coloca tudo em maiusculo
console.log(nome.toLocaleUpperCase());

//Substitui
console.log(nome.replace("Le","La"));

//Split, trasnforma dados longos em um array/lista
let lista = "Maria, Marta, Clara, João";
//split - espaço
lista = lista.split(";");
console.log(lista);

//Volta a ser uma lista
lista = lista.join(",");
console.log(lista);

//Adiciona ao fim da minha lista
arr.push("Larissa");
console.log(arr)

//Adiciona ao começo da lista
arr.unshift("Marcia");
console.log(arr)

//Tira do fim da lista
arr.pop();
console.log(arr);

//Tira do começo da lista
arr.shift();
console.log(arr);

//IF e ELSE

if(3 > 4){
    console.log("Oi")
}else{
    console.log("xau")
}

// IF e ELSE IF e ELSE
if(3 > 4){
    console.log("Oi")
}else if (5>4){
    console.log("HI")
}else{
    console.log("xau")
}

//AND = && 
// OR == ||
// NOT == !

//Switch
let amarela = prompt("Escolha uma cor:");
switch (amarela){
    case "amarelo":
        console.log("Você gosta de:", amarela);
    case "vermelho":
        console.log("Você gosta de:", amarela);
    case "roxo":
        console.log("Você gosta de:", amarela);
    case "rosa":
        console.log("Você gosta de:", amarela);
        break;
    default:
        console.log("Você é um coloridinho");
}
//break encontra a resposta e dá o break
//se não encontrar vai para o default

//OPERADOR TERNÁRIO
//IF em linha, se for verdade vem a primeira parte, se não vem a segunda
let idade  = prompt("Digite sua idade:");
let maiorDidade = idade > 18 ? "sim": "não";
console.log(maiorDidade)