/* //TICKET//
let kilometer = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
let paxAge = parseInt(prompt("Inserisci la tua età"));
console.log(kilometer,paxAge);

let ticket = (0.21 * kilometer);
let noDiscountedTicket = ticket.toFixed(2).replace(/\./, ",");
console.log(noDiscountedTicket);

// TICKET JUNIOR//
let discount1 = (ticket * 20) / 100;
console.log(discount1);
let discountedTicket1 = (ticket - discount1);
/* Prezzo finale biglietto 1
in decimali */
/* let finalPrice1 = discountedTicket1;
console.log(finalPrice1);

// TICKET SENIOR//
let discount2 = (ticket * 40) / 100;
console.log(discount2);
let discountedTicket2 = (ticket - discount2);
/* Prezzo finale biglietto 2
in decimali */
/* let finalPrice2 = discountedTicket2.toFixed(2).replace(/\./, ",");
console.log(finalPrice2);

// CONDITION //
if (paxAge < 18){
    document.getElementById(`title`).innerHTML = `Il prezzo del biglietto è: ${finalPrice1.toFixed(2)} €`;
}
else if (paxAge > 65){
    document.getElementById(`title`).innerHTML = `Il prezzo del biglietto è: ${finalPrice2.toFixed(2)} €`;
}
else {
    document.getElementById(`title`).innerHTML = `Il prezzo del biglietto è: ${noDiscountedTicket.toFixed(2)} €`;
} */ 

let elNameSurname = document.getElementById('name');
let elKilometers = document.getElementById('kilometers');
let elAge = document.querySelector('.age');
let elButton1 = document.querySelector('.button-1')
let elButton2 = document.querySelector('.button-2')
console.log(elNameSurname, elKilometers, elAge, elButton1, elButton2); 

let elSelectedTicket = document.querySelector('.selected-ticket');

elButton1.addEventListener('click', function(){ 
   /*  console.log("hai cliccato il bottone"); */
    let name = elNameSurname.value;
    let kilometers = elKilometers.value;
    let age = elAge.value;
    console.log(name, kilometers, age);
    elSelectedTicket.classList.remove('d-none');
 })

 elButton2.addEventListener('click', function(){ 
   /*  console.log("hai cliccato il bottone"); */
 })