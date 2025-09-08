//DESIGN PATTERS
/*function criarAnimal(tipo){
    if (tipo === "cachorro") {
        return {tipo: "cachorro", som: "auau"};
    } else if (tipo === "gato"){
        return {tipo: "gato", som: "miau"};
    }
}

const animal = criarAnimal("cachorro");
const animal2 = criarAnimal("gato");

console.log(animal)
console.log(animal2)


function criarCarro(marca){
    if (marca === "Fiat"){
        return {marca:"Fiat", modelo: "Uno"}
    }else if (marca === "Ferrari"){
        return {marca: "Ferrari", modelo:"F40", velocidadeMaxima:"320Km/h"}
    }
}

const carro1 = criarCarro("Fiat")
const carro2 = criarCarro("Ferrari")

console.log(carro1)
console.log(carro2)*/

//PROMISES
const ifood = new Promise((resolve, reject) => {
    console.log("Pedido aguardando confirmação...")

    const estado = true;
    setTimeout(() => {
        if (estado){
            resolve("Pedido sendo preparado")
        }else{
            reject("Ops estamos sem queijo")
        }
    }, 5000);
});

ifood
    .then(msg => console.log("Sucesso: ", msg))
    .catch(erro => console.log("Erro", erro))
    .finally(fim => console.log("Dormir", fim));

