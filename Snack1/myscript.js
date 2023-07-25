// console.log("JS OK");

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// RECUPERO TUTTI GLI ELEMENTI UTILI

const generatedNumber = document.getElementById("first_print");
const printedNumber = document.getElementById("printer");
const number = Math.floor(Math.random() * 100) + 1;

// IF PER STAMPARE

generatedNumber.innerText = number;

if (number % 2 == 0) {

    printedNumber.innerText = number;
} else {

    printedNumber.innerText = number + 1;
};

