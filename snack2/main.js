let numeroInput = parseInt(prompt("inserisci un numero"))
let i=0 
content = document.getElementById("contenitore")
 while (i < numeroInput){

    let contenitore=[]
    for(y=0; y<10; y++){
        contenitore.push(Math.floor(Math.random() * 100 +1))
        console.log(contenitore)
    }
    content.innerHTML +=`<p>${contenitore}</p>`
    i++
};
   