$(document).ready(function() {

    // intercetto il click sul pulsante
    $('#calcola').click(function() {
        // recupero i dati inseriti dall'utente
        var numero1 = parseInt($('#numero1').val());
        var numero2 = parseInt($('#numero2').val());
        var operazione = $('#operazione').val();

        // verifico quale operazione ha scelto l'utente ed eseguo l'operazione corrispondente
        switch(operazione) {
            case '+': {
                var risultato = numero1 + numero2;
                break;
            }
            case '-': {
                var risultato = numero1 - numero2;
                break;
            }
            case '*': {
                var risultato = numero1 * numero2;
                break;
            }
            case '/': {
                var risultato = numero1 / numero2;
                break;
            }
            default: {
                console.log('Non hai selezionato un\'operazione valida');
            }
        }

        // se è stato possibile calcolare il risultato, lo stampo
        if(risultato) {
            console.log(numero1 + ' ' + operazione + ' ' + numero2 + ' = ' + risultato);
        }
    });

});
