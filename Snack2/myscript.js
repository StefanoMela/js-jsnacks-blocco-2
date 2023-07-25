// console.log("JS OK");

// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da
// queste vuole generare una falsa lista di invitati con nome e cognome. 

// RECUPERO GLI ELEMENTI UTILI

const namesArray = ["Al", "Jhon", "Jack", "Sam"];
const surnamesArray = ["Buccheri", "Gresko", "Amoruso", "Genovese"];
const whereToPrint = document.getElementById("printer");



for (let i = 0; i < 6; i++) {
    
    const rndIndex1 = Math.floor(Math.random() * namesArray.length);
    const rndIndex2 = Math.floor(Math.random() * surnamesArray.length);
    const rndName = namesArray[rndIndex1];
    const rndLast = surnamesArray[rndIndex2];

    // console.log(rndName, rndLast);

    whereToPrint.innerHTML += `<li class="list-items-flush">${rndName} ${rndLast}</li>`;    
};












// for (let i = 0; i < namesArray.length && surnamesArray.length; i++) {

//     const names = namesArray[i];
//     const lastnames = surnamesArray[i];
//     whereToPrint.innerHTML += `<li class="list-group-item">${names} ${lastnames}</li>`;
// } 

// CREO INDICE PER RANDOMIZZARE I DUE ARRAY