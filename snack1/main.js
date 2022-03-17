let contenitore = [];
let somma = 0;
let numeroInput;
while(somma <= 50){
    numeroInput = parseInt(prompt("inserisci un numero"))
    somma = somma + numeroInput
    contenitore.push(numeroInput)
}
console.log(somma);
console.log(contenitore);