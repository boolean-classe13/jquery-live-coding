// Simulare un countdown di 10 secondi che alla fine dice buon anno

// versione base
var countdown = 10;
// imposto un interval di 1 secondo
var clock = setInterval(function() {
    if(countdown > 0) {
        // devo stampare ancora un numero
        console.log(countdown);
        $('#numero').text(countdown);
        // decremento il countdown
        countdown--;
    } else {
        // arrivo qui quanto countdown è = 0 => interrompo l'interval
        clearInterval(clock);
        alert('buon anno!');
    }
}, 1000);


// versione con pulsante e secondi stabiliti dall'utente
// quando l'utente clicca sul pulsante, parte un countdown di secondi stabiliti dall'utente
$('#start').click(function() {
    // chiedo all'utente i secondi del countdown
    var countdown_utente = parseInt(prompt('Quanti secondi mancano?'));
    // imposto un interval di 1 secondo
    var clock2 = setInterval(function() {
        if(countdown_utente > 0) {
            // devo stampare ancora un numero
            console.log(countdown_utente);
            $('#numero').text(countdown_utente);
            // decremento il countdown
            countdown_utente--;
        } else {
            // arrivo qui quanto countdown è = 0 => interrompo l'interval
            clearInterval(clock2);
            alert('buon anno!');
        }
    }, 1000);
});
