
//generatore numero random

let numeroRandom = Math.floor(Math.random() * 100) + 1;
console.log(numeroRandom);

//piú numeri random

for (let index = 0; index < 10; index++) {

    //let numeroRandom = Math.floor(Math.random() * 100) + 1;
    let numeroRandom = Math.floor(Math.random() * (100 - 1)) + 1;
    
    console.log(numeroRandom);
    
}


//genero con la funzione

const newRandomNum = genraNumeroRandom(50, 100);

console.log("numero random esterno al for ", newRandomNum);


//function HELPER

function genraNumeroRandom(min, max) {

    let newRandomNumLocal = Math.floor(Math.random() * (max - min)) + min;
    return newRandomNumLocal;
}


//prendere un numero imput da user
const inputUtente = parseInt(prompt("inserisci il numero"));

//controllo dire se é pari o dispari

if(inputUtente % 2 === 0) {
    console.log("è pari");
}else{
    console.log("è dispari");
}


//con funzione

controllaNumeroPariDispari(inputUtente)

// funzioni

function controllaNumeroPariDispari(numeroArg) {
    
    if(numeroArg % 2 === 0) {
        console.log("è pari");
    }else{
        console.log("è dispari");
    }

}


//oppure

function controllaNumeroPariDispari(numeroArg) {
    //creo una variabile locale
    let risultato = 'dispari';

    if(numeroArg % 2 === 0) {
        risultato = 'pari';
    }

    return risultato

}

//oppure

function controllaNumeroPariDispari(numeroArg) {
    
    if(numeroArg % 2 === 0) {
        return 'pari';
    }else{
        return 'dispari';
    }

}