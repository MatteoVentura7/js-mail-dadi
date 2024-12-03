// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const ListMail = [
    'matteo@libero.it',
    'luca@gmail.com',
    'Fabio@gmail.com',
    'Phil@outlook.it',
    'Carlo@boolean.com',
  ];

  // 1 - Chiedo la mail all'utente
const MailUtente =(prompt("Inserisci la tua Mail"));

let trovato = false;

// Controllo usando un ciclo for
for (let i = 0; i < ListMail.length; i++) {
    if (ListMail[i] === MailUtente) {
        trovato = true;
        break;
    }
}

if (trovato) {
    alert(`Mail corretta`);
} else {
    alert(`Errore! Mail non valida`);
}