
let elNameSurname = document.getElementById('name');
let elKilometers = document.getElementById('kilometers');
let elAge = document.querySelector('.age');
let elButton1 = document.querySelector('.button-1')
let elButton2 = document.querySelector('.button-2')
console.log(elNameSurname, elKilometers, elAge, elButton1, elButton2); 

let elSelectedTicket = document.querySelector('.selected-ticket');

let paxAge = parseInt(document.querySelector('.age'));

elButton1.addEventListener('click', function(){ 
   /*  console.log("hai cliccato il bottone"); */
    let name = elNameSurname.value;
    let kilometers = elKilometers.value;
    let age = elAge.value;
    console.log(name, kilometers, age);
    elSelectedTicket.classList.remove('d-none');
    elSelectedTicket.classList.add(age);
    document.getElementById('pax').innerHTML = name;
    document.getElementById('pax').innerHTML = name;
 })


