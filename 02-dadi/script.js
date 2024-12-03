// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero 2 numeri casuali
const playerNumber = Math.ceil(Math.random() * 6);
const computerNumber = Math.ceil(Math.random() * 6);

console.log('Il tuo numero è : ' ,playerNumber);
console.log('Il numero del computer è : ' ,computerNumber);

// controllo quale sia il più grande
if (playerNumber > computerNumber) {
    console.log('Hai vinto!');
} else if(computerNumber > playerNumber) {
    console.log('Hai perso!');
} else if(playerNumber == computerNumber) {
    console.log('i numeri sono uguali');
}