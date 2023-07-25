// Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// ELEMENTI UTILI

const firstPrint = document.getElementById("first_array");
const secondPrint = document.getElementById("second_array");
const fullPrint = document.getElementById("full_array");

const firstArray = [1,2,3,4,5,6];
const scndArray = [10,11,12,13,14,15,16,18,19,20];

firstPrint.innerText = firstArray;
secondPrint.innerText = scndArray;

for (let i = firstArray.length; i < scndArray.length; i++) {

    firstArray.push(parseInt(Math.random()* 100));
    fullPrint.innerText = firstArray;

};
