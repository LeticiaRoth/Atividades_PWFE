console.log("EXERCÍCIO 1")
let num = Number (prompt("Digite o primeiro número:"))

if (num % 2 == 0){
    console.log("Número par")
}else{
    console.log("Número ímpar")
}

//Divisão por 3
if (num % 3 == 0) {
    console.log("O número é divisível por 3.");
}else{
    console.log("Número não é divisível por 3")
}

//Divisão por 5
if (num % 5 == 0) {
    console.log("O número é divisível por 5.");
}else{
    console.log("Número não é divisível por 5")
}


//Console de separação de exercícios
console.log("")
console.log("EXERCÍCIO 2")
let idade = Number(prompt("Digite sua idade:"))

if (idade < 2) {
    console.log("Bebê");
} else if (idade >= 2 && idade < 13) {
    console.log("Criança");
} else if (idade >= 13 && idade < 18) {
    console.log("Adolescente");
} else if (idade >= 18 && idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}



//Console de separação de exercícios
console.log("")
console.log("EXERCÍCIO 3")

let ano = Number(prompt("Digite um ano:"))
//Divisivel por 4 e não por 100
if ((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 === 0)){
    console.log(ano,"é bissexto")
}else{
    console.log(ano,"não é bissexto")
}

//Console de separação de exercícios
console.log("")
console.log("EXERCÍCIO 4")

let escolha = prompt("Escolha uma das opções: \n1- Celsius para Fahrenheit\n2 - Fahrenheit para Celsius");

if (escolha == "1"){
    //Number força a entender que é um numero
    let celsius = Number(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    //Delimita as casas decimais
    console.log(celsius + "°C equivalem a " + fahrenheit.toFixed(2) + "°F");  

}else if (escolha === "2") {
      let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));
      let celsius = (fahrenheit - 32) * 5/9;
      console.log(fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C");
      
} else {
      console.log("Opção inválida.");
}

//Console de separação de exercícios
console.log("");
console.log("EXERCÍCIO 5");

let velocidade = Number(prompt("Digite a velocidade (Km) do carro:"));

if(velocidade > 80){
    let calculoKm = velocidade - 80;
    let calculoMulta = calculoKm * 5

    console.log("Você foi multado!");
    console.log("Valor da multa: R$" + " " + calculoMulta)
}else{
    console.log("Não há multas");
}

//Console de separação de exercícios
console.log("");
console.log("EXERCÍCIO 6");

let quantidadeAtual = Number(prompt("Digite a quantidade atual do estoque:"));
let quantidadeMaxima = Number(prompt("Digite a quantidade máxima do estoque:"));
let quantidadeMinima = Number(prompt("Digite a quantidade mínima do estoque:"));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;
if (quantidadeAtual >= quantidadeMedia){
    console.log("Não é necessário efetuar a compra");
}else{
    console.log("Necessário efetuar a compra");
}

//Console de separação de exercícios
console.log("");
console.log("EXERCÍCIO 7");

let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));

//Função que pega o ano atual
let anoAtual = new Date().getFullYear();

let idadeNascimento = anoAtual - anoNascimento;
if (idadeNascimento < 18) {
    let anosFaltam = 18 - idadeNascimento;
    console.log("Faltam " + anosFaltam + " para se alistar");
} else if (idadeNascimento == 18) {
    console.log("Você vai se alistar esse ano");
} else {
    let anosPassados = idadeNascimento - 18;
    console.log("Você já deveria ter se alistado há " + anosPassados + " ano(s)");
}

//Console de separação de exercícios
console.log("");
console.log("EXERCÍCIO 8");

let numeroCnta = Number(prompt("Digite o número da sua conta:"));
let saldo = Number(prompt("Digite o saldo atual:"));
let debito = Number(prompt("Digite o valor de débito:"));
let credito = Number(prompt("Digite o valor de crédito:"));

let saldoAtual = saldo - debito + credito;
console.log("Saldo atual da conta " + numeroCnta + " é de R$ " + saldoAtual.toFixed(2));