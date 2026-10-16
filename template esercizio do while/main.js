


//Esempio

//Un programma chiede all'utente di inserire un numero tra 1 e 10. La richiesta si ripete finché il valore non è nell'intervallo valido. La domanda deve comparire almeno una volta, quindi do / while è la scelta giusta.



//let numero;

//do {
//   numero = Number(prompt("Inserisci un numero tra 1 e 10:"));
//} while (numero < 1 || numero > 10);

//console.log("Hai inserito: " + numero);



//Esercizio

//Chiedi all'utente di inserire il PIN. 
//Se inserisce un valore diverso da 1234,
//stampa un messaggio di errore e ripeti la richiesta. 
//Quando il valore è corretto, stampa un messaggio di benvenuto.



let pin;

do {
    pin = prompt("Inserisci il PIN:");

    if (pin !== "1234") {
        console.log("Errore: PIN errato. Riprova.");
    }

} while (pin !== "1234");

console.log("Benvenuto!");

