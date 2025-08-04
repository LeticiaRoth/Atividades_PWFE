console.log("EXERCÍCIO 1")
let num = prompt("Digite o primeiro número:")

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
let idade = prompt("Digite sua idade:")

if (idade < 2){
    console.log("Bebê")
}else if (idade > 2 && idade < 13){
    console.log("Criança")
}else if (idade > 13 && idade < 18){
    console.log("Adolescente")
}else if (idade > 18 && idade < 60){
    console.log("Adulto")
}else{
    console.log("Idoso")
}


//Console de separação de exercícios
console.log("")
console.log("EXERCÍCIO 3")