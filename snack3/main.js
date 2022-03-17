let somma = 0;
for (i = 1; i <= 5; i++){
    let valoreInput = parseInt(prompt("inserisci un numero")) 
    somma = somma + valoreInput
}
document.getElementById("contenitore").innerHTML += `${somma}`