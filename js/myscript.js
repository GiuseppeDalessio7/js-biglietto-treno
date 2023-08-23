/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo)*/

//il numero di chilometri che vuole percorrere
const km = Number(prompt('Quanti Chilometri devi percorrere?'));
console.log ('I chilometri da percorrere sono:'+ km);


//l'età del passeggero
const age = Number(prompt("Quale è la tua età?")); 
console.log("La tua età è:" + age);


if (isNaN(km) || isNaN(age)) {
    alert("devi scrivere una cifra numerica");
    location.reload();
  }




//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketPrice = km * 0.21;
console.log("Il costo del biglietto è:€" + ticketPrice)
//stampa il prezzo del biglietto


let total 
//va applicato uno sconto del 20% per i minorenni
if(age <= 18 ) {
    let = discount20 = ticketPrice * (20 / 100);
    total = ticketPrice - discount20;
}
//va applicato uno sconto del 40% per gli over 65.
else if (age >= 65) {
    let = discount65 = ticketPrice * (40 / 100);
    total = ticketPrice - discount65;
}

else {
    total = ticketPrice
}

 let finalPrice = total.toFixed(2)
 console.log(total);
 console.log(finalPrice);

// //stampo su documento 
 document.getElementById("ticketPrice").innerHTML = "Il costo del biglietto è:€" + finalPrice;