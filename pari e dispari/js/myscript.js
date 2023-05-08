

//pari o dispari

//BOTTONE
const button = document.getElementById('gioca');

button.addEventListener(
    'click',
    function() {
        //pari o dispari
        const userScelta = document.getElementById('pari_dispari').value;;
        console.log(`scelta user: ${userScelta}`);

        //numero user
        const userNumber = parseInt(document.getElementById('numero').value);
        console.log(`numero user: ${userNumber}`);

        //numero pc
        const pcNumber = generaNumeroMaxEscluso(1, 6);
        console.log("numero del pc: ", pcNumber);

        //sommo i numeri
        let sommaNumeri = somma(userNumber, pcNumber);
        console.log("somma: ", sommaNumeri);

        //valuto se é pari o dispari
        let risultato = controllaPariDispari(sommaNumeri);
        console.log(`la somma dei due numeri é ${risultato}`);

        //dichiaro chi ha vinto
        let dichiaroVincitore = vincitore(risultato, userScelta);
        console.log(dichiaroVincitore);

        //scrivo il risultato
        const risultatoGioco =
        `<h3>Il PC gioca il numero <strong>${pcNumber}</strong></h3>
        <h3>la somma é ${sommaNumeri}, ${risultato}</h3>
        <h2 class="red">${dichiaroVincitore}</h2>`

        const container = document.querySelector('div.risultato');
        container.innerHTML = risultatoGioco;

    }
)

// utente sceglie pari o dispari

// let userScelta = prompt('scrivi pari o dispari').toLocaleLowerCase();
// console.log(`hai scelto ${userScelta}`);

//utente sceglie un numero da 1 a 5

// let userNumber = parseInt(prompt('scegli un numero da 1 a 5'));
// console.log("il tuo numero é ", userNumber);


//genero un numero da 1 a 5 per il computer
// let pcNumber = generaNumeroMaxEscluso(1, 6);
// console.log("numero del pc: ", pcNumber);

//sommo i numeri
// let sommaNumeri = somma(userNumber, pcNumber);
// console.log("somma: ", sommaNumeri);

//valuto se é pari o dispari
// let risultato = controllaPariDispari(sommaNumeri);
// console.log(`la somma dei due numeri é ${risultato}`);

//dichiaro chi ha vinto
// let dichiaroVincitore = vincitore(risultato, userScelta);
// console.log(dichiaroVincitore);


//function HELPER

function generaNumeroMaxEscluso(min, max) {

    let newRandom= Math.floor(Math.random() * (max - min)) + min;
    return newRandom;
}


function somma(a, b) {
    let somma = a + b;

    return somma;
}



function controllaPariDispari(numero) {
    
    if(numero % 2 === 0) {
        return 'pari';
    }else{
        return 'dispari';
    }

}

function vincitore(risultato, scelta) {

    if(risultato === scelta){
        return 'Hai vinto!';
    }else{
        return 'Hai perso!';
    }
    
}