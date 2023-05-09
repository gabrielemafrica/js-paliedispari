
//verifichiamo se una parola é palindroma

//chiedi una parola

//let parola = prompt("inserisci una parola").toLowerCase();
// console.log(parola);

//prendo il bottone
const button = document.getElementById('verifica');

//al click

button.addEventListener(
    'click',
    function() {

        //chiedi una parola
        const parola = document.getElementById('parola').value.toLowerCase();
        console.log(parola);
        
        //parola al contrario
        const parolaContrario = parolaReverse(parola);
        console.log(parolaContrario);

        //risposta
        let palindroma = false;

        //valuto le parole
        if (parola === parolaContrario) {
            palindroma = true;
        }

        //do la risposta

        let risposta;

        //inserisco la risposta

        if (palindroma) {

            //inserisco la risposta
            risposta = `<h2>La parola inserita è PALINDROMA</h2>`;         
            console.log("é una parola PALINDROMA");
        }else{
            risposta  = `<h2>La parola inserita non é PALINDROMA</h2>`;     
            console.log("non è una parola PALINDROMA");
        }

        //inserisco
        const container = document.querySelector('div.risposta');
        container.innerHTML = risposta;

    }

)

//parola al contrario
// let parolaContrario = parolaReverse(parola);
// console.log(parolaContrario);

//risposta
// let palindroma = false;


//valuto le parole

// if (parola === parolaContrario) {
//     palindroma = true;
// }

// console.log(palindroma);


//do la risposta

// if (palindroma) {
//     console.log("é una parola PALINDROMA");
// }else{
//     console.log("non è una parola PALINDROMA");
// }




//funzioni
//funzione per invertire la parola

function parolaReverse(stringa) {
    //variabile
    let stringaReverse = "";

    //ciclo le lettere della parola al contrario
    for (let index = stringa.length - 1; index >= 0; index--) {

        stringaReverse += stringa[index];   
    }
    return stringaReverse;
}