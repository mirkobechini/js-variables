// 1. Dichiarazione di variabili
// Crea una variabile chiamata nickname e assegnale un soprannome.
// Stampa il valore di nickname nella console.

const nickname = 'Fact';
console.log(nickname);

// 2. Tipi primitivi
// Crea tre variabili chiamate luckyNumber, phrase e isCodingFun
// e assegna rispettivamente un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.

const luckyNumber = 23;
const phrase = 'Frase incredibile';
const isCodingFun = true;
console.log(luckyNumber);
console.log(phrase);
console.log(isCodingFun);

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il soprannome completo
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const userName = 'Alex'; // NON MODIFICARE QUESTA RIGA
const userNickname = 'Thunder'; // NON MODIFICARE QUESTA RIGA

const completeName = userName + userNickname;
console.log(completeName); // Output: "Alex Thunder"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile characters per ottenere la sua lunghezza
const alphabetSize = characters.length;
console.log(alphabetSize); // Output: 26

const region = 'Tokyo'; // NON MODIFICARE QUESTA RIGA
const regionName = 'Region'; // NON MODIFICARE QUESTA RIGA
const fruitBasket = 'mele, pere, ananas, arance'; // NON MODIFICARE QUESTA RIGA
const welcome = 'welcome'; // NON MODIFICARE QUESTA RIGA

// 5. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere 'o' nella variabile region
const regionIndex = region.toLowerCase().indexOf('o');
console.log(regionIndex); // Output: 1

// 6. Sottostringhe 
// Stampa la sottostringa "yo" dalla variabile region
const regionSubstring = region.substring(3);
console.log(regionSubstring); // Output: "yo"

// 7. Sostituzione
// Sostituisci 'Tokyo' con 'Osaka'
const regionReplaced = region.replaceAll('Tokyo','Osaka');
console.log(regionReplaced); // Output: "Osaka"

// 8. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi regionNameConcat uguale a 'Tokyo Region'
const regionNameConcat = `${region + ' ' + regionName}`;
console.log(regionNameConcat); // Output: "Tokyo Region"

// 9. Tutto in maiscolo
// Trasforma tutto in maiuscolo la stringa della variabile welcome
const upperCaseWelcome = welcome.toUpperCase();
console.log(upperCaseWelcome); // Output: "WELCOME"
