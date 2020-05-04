// Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert()

// chiedere all'utente il tempo di cottura
var secondi = parseFloat(prompt('Quanti secondi mancano alla cottura della pasta?'));
console.log(secondi);

var millisecondi = secondi * 1000;
console.log(millisecondi);

setTimeout(function() {
    alert('la pasta è pronta');
}, millisecondi);
