let nomi = ["marco", "andrea", "jonny", "alessandro", "luca", "giovanni"]
let nomeInvitato = prompt("inserisci il tuo nome")
let snitch = false;
let i = 0;
while (i < nomi.length){
    if(nomeInvitato == nomi[i]){
        snitch = true;
    }
    i++
} if(snitch == true){
    document.getElementById("contenitore").innerHTML += `sei stato invitato!`
} else{
    document.getElementById("contenitore").innerHTML += `non sei stato invitato`
}