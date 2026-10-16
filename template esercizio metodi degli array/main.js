// //Esempio


// const frutta = ['mela', 'pera', 'banana', 'kiwi'];

// // Aggiunta in coda e in testa
// frutta.push('uva');           // ['mela', 'pera', 'banana', 'kiwi', 'uva']
// frutta.unshift('arancia');    // ['arancia', 'mela', 'pera', 'banana', 'kiwi', 'uva']

// // Rimozione in coda e in testa
// frutta.pop();                 // rimuove 'uva'
// frutta.shift();               // rimuove 'arancia'

// // Ricerca
// console.log(frutta.includes('pera'));          // true
// console.log(frutta.indexOf('banana'));         // 2

// // Lettura per indice con .at()
// console.log(frutta.at(1));    // 'pera'

// // Copia parziale senza modificare l'originale
// const primi = frutta.slice(0, 2);  // ['mela', 'pera']

// // Rimozione e sostituzione con .splice()
// frutta.splice(0, 1);                      // rimuove 'mela'
// frutta.splice(1, 1, 'fragola', 'pesca'); // sostituisce un elemento con due

// // Inversione dell'ordine
// frutta.reverse();

// // Sovrascrittura di tutti gli elementi
// frutta.fill('limone');

// // Unione in stringa
// const lista = frutta.join(', ');




// Esercizio
// Parti dall'array ['rosso', 'verde', 'blu', 'giallo']. 
// Aggiungi 'viola' in coda, rimuovi il primo elemento, 
// controlla se 'blu' è presente, 
// ottieni una copia dei primi due elementi con slice e unisci tutto in una stringa con ' | ' come separatore.


const colori = ['rosso', 'verde', 'blu', 'giallo'];

colori.push('viola');
colori.shift();

console.log(colori.includes('blu'));    // true

const primiDue = colori.slice(0, 2);
const stringa = colori.join(' | ');