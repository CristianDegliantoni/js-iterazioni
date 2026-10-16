//Un programma deve cercare il primo numero intero maggiore di 100 divisibile per 7.
// Non sappiamo quanti giri servono. Sappiamo solo quando fermarci.

// let numero = 101;

//while (numero % 7 !== 0) {
//   numero = numero + 1;
//}

//console.log("Primo numero divisibile per 7 dopo 100: " + numero);



//Esercizio

//Chiedi all'utente di inserire i suoi voti uno alla volta.
// Continua a chiedere finché non inserisce 0. 
//Quando inserisce 0, stampa la media di tutti i voti inseriti.


let somma = 0;
let contatore = 0;
let voto = Number(prompt("Inserisci un voto (0 per terminare):"));

while (voto !== 0) {
    somma = somma + voto;
    contatore = contatore + 1;
    voto = Number(prompt("Inserisci un voto (0 per terminare):"));
}

if (contatore > 0) {
    console.log("Media: " + somma / contatore);
} else {
    console.log("Nessun voto inserito.");
}