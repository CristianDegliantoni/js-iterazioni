

//Esercizio finale


//Il computer sceglie un numero segreto: 7.
// Chiedi all'utente di indovinarlo con prompt.
// Ogni volta che sbaglia, stampa se il numero inserito è troppo alto o troppo basso.
// Continua finché l'utente non indovina. Quando indovina, stampa in quanti tentativi ci è riuscito.

let numeroSegreto = 7
let tentativo = 0
let contatore = 0

do {
    tentativo = Number(prompt("Indovina il numero segreto:"));
    contatore++;

    if (tentativo < numeroSegreto) {
        console.log("Troppo basso!");
    } else if (tentativo > numeroSegreto) {
        console.log("Troppo alto!");
    }
} while (tentativo !== numeroSegreto);

console.log("Hai indovinato in " + contatore + " tentativi!");

