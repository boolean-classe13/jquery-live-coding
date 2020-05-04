// Visualizzare 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, l'utente deve inserire uno alla volta i numeri che ha visto precedentemente, tramite un prompt.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// genero 5 numeri casuali e li salvo in un array
var numeri_casuali = [];

// utilizziamo un ciclo while per essere sicuri che i numeri generati siano tutti diversi
while (numeri_casuali.length < 5) {
    // genero un numero casuale
    var numero = genera_random(1, 100);
    if(!numeri_casuali.includes(numero)) {
        // il numero non era già stato generato precedentemente
        // => lo inserisco tra i numeri casuali
        numeri_casuali.push(numero);
    }
}

// visualizzo i 5 numeri casuali in pagina
var numeri_stringa = numeri_casuali.join(' ');
$('#numeri').text(numeri_stringa);
console.log(numeri_casuali);

// faccio partire un timer di 30 secondi => allo scadere del timer nascondo i numeri
setTimeout(function() {
    // $('#numeri').hide(); // imposta il display: none inline
    $('#numeri').text(''); // imposta il testo nell'innerHTML = ''
    // $('#numeri').remove(); // toglie l'elemento dal DOM
}, 30000);


// dopo aver nascosto i numeri, chiedo all'utente di inserire 5 numeri
// e controllo quali indovina tra quelli generati precedentemente
setTimeout(function() {
    // creo un array per ricordarmi tutti i numeri che ha inserito l'utente
    var numeri_inseriti = [];
    // creo un contatore per il punteggio
    var punteggio = 0;
    // creo un array per ricordarmi i numeri indovinati
    var numeri_indovinati = [];

    // utilizziamo un ciclo do-while per chiedere i numeri all'utente
    // in questo modo possiamo controllare che ogni volta siano numeri diversi
    // il ciclo ripete finché l'utente non ha inserito 5 numeri (tutti diversi)
    do {
        var numero_utente = parseInt(prompt('inserisci un numero visualizzato prima'));
        console.log(numero_utente);

        // controllo se l'utente ha inserito un numero nuovo
        if(!numeri_inseriti.includes(numero_utente))  {
            // l'utente ha inserito un numero diverso dai precedenti
            // inserisco il numero tra i numeri inseriti
            numeri_inseriti.push(numero_utente);

            // controllo se il numero inserito corrisponde ad uno dei numeri generati precedentemente
            if(numeri_casuali.includes(numero_utente)) {
                // l'utente ha indovinato un numero
                // incremento di uno il punteggio
                punteggio++;
                // inserisco il numero tra i numeri indovinati
                numeri_indovinati.push(numero_utente);
            }
        }
    } while (numeri_inseriti.length < 5);

    // visualizzo nuovamente i numeri casuali
    var numeri_stringa = numeri_casuali.join(' ');
    $('#numeri').text(numeri_stringa);

    // visualizzo i numeri inseriri dall'utente
    var numeri_utente_stringa = numeri_inseriti.join(' ');
    $('#numeri_utente').text(numeri_utente_stringa);

    // visualizzo i numeri indovinati
    var numeri_indovinati_stringa = numeri_indovinati.join(' ');
    $('#numeri_indovinati').text(numeri_indovinati_stringa);

    console.log(numeri_inseriti);
    console.log(numeri_indovinati);
    console.log(punteggio);
    alert('hai totalizzato ' + punteggio + ' punti');

}, 31000);

// funzione per generare un numero casuale tra min e max
function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
