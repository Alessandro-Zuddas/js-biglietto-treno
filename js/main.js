// 1. Chiedo all'utente i chilometri da percorrere
// 2. Chiedo all'utente l'età del passeggero
// 3. Trovo il prezzo in base ai km moltiplicando prezzo x km da percorrere
// 4. SE l'età dell'utente è MINORE di 18 anni applico il 20% di sconto
//    ALTRIMENTI SE l'età dell'utente è MAGGIORE O UGUALE di 65 anni applico il 40% di sconto
// 5. Stampo il prezzo finale all'utente con due cifre decimali.
const tripDuration = Number(prompt("Salve! Inserire i Km da percorrere!"));

const userAge = Number(prompt("Adesso inserisci la tua età!"));

let fullPrice = tripDuration * 0.21;

if(userAge < 18){
    fullPrice -= (fullPrice * 20 / 100);
    document.querySelector("h2").innerHTML = `${fullPrice.toFixed(2)} €`;
}else if (userAge >= 65){
    fullPrice -= (fullPrice * 40 / 100);
    document.querySelector("h2").innerHTML = `${fullPrice.toFixed(2)} €`;
} else {
    document.querySelector("h2").innerHTML = `${fullPrice.toFixed(2)} €`;
}
