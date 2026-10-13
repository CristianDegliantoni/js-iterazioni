// const limite = 3;

//debugger;
//for (let i = 1; i <= limite; i++) {
//    const numero = Number(prompt("inserisci il numero " + i + ":"));
//    console.log(numero + " al quadrato è " + numero * numero);
//}
//console.log("numeri richiesti: " + limite);

// procedimento per calcolare il quadrato di 3 numeri visto che la const limite è 3 

const soglia = 18;

for (let i = 1; i <= 4; i++) {
    const voto = Number(prompt("inserisci voto" + i + ":"))
    if (voto < soglia) {
        console.log("punteggio insufficiente")
    } else
        console.log("prova superata")

}

console.log("soglia di sufficienza: " + soglia)

// Dichiara fuori dal ciclo una variabile soglia con il valore 18. Chiedi all'utente di inserire 4 voti con prompt. Per ogni voto, 
// stampa se è sufficiente o insufficiente confrontandolo con la soglia.
//  Dopo il ciclo, stampa il valore di soglia e verifica che la variabile voto non sia accessibile fuori dal blocco.