// DESCRIZIONE:

// creazione array utenti già registrati con cognome
var UserReg = ["Pippo","Pluto","Paperino","Sofficino"]
console.log(UserReg);

// popup con richiesta cognome all'utente
var SurnameUser = prompt("ciao frenzo qual è il tuo cognome")
console.log(SurnameUser);

//inserimento cognome in array
UserReg.push(SurnameUser)
console.log(UserReg);

// stampa lista ordinata alfabeticamente
document.getElementById('SurnameList').innerHTML = UserReg.sort();

// scrivere in che posizione si trova l'utente in base all'ordinamento alfabetico
