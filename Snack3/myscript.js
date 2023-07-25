// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const whereToPrint = document.getElementById("printer");
const firstPrint = document.getElementById("nmb_list");

const nmbsArr = [];
let totalSum = 0;

for (i = 0; i < 10; i++) {
    
    nmbsArr.push(Math.floor(Math.random() * 39)+1);
    firstPrint.innerText = nmbsArr;

    if (i % 2 != 0) {
        
        totalSum = nmbsArr[i] + totalSum;
        whereToPrint.innerText = totalSum;
    };    
};


// metodo con creazione array

// const numbers = Array.from({length: 40}, () => Math.floor(Math.random() * 39)+1);

// for (i = 0; i < numbers.length; i++) {
    //     if (i % 2 != 0) {
        //         whereToPrint.innerHTML +=`<li class="list-items-group"> ${numbers[i]} </li> `;
        //     };
        
        // };
        