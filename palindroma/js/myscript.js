
//verifichiamo se una parola é palindroma

//chiedi una parola

let parola = prompt("inserisci una parola").toLowerCase();
console.log(parola);

//parola al contrario
let parolaContrario = parolaReverse(parola);
console.log(parolaContrario);

//risposta

let palindroma = false;
//valuto le parole

if (parola === parolaContrario) {
    palindroma = true;
}

console.log(palindroma);


//do la risposta

if (palindroma) {
    console.log("é una parola PALINDROMA");
}else{
    console.log("non è una parola PALINDROMA");
}




//funzioni
//funzione per invertire la parola

function parolaReverse(stringa) {
    //variabile
    let newStringa = "";

    //ciclo le lettere della parola al contrario
    for (let index = stringa.length - 1; index >= 0; index--) {

        newStringa += stringa[index];   
    }
    return newStringa;
}