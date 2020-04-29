// Creare il titolo di un paragrafo e un bottone che permette di espandere il testo inizialmente nascosto

// intercetto il click sul pulsante
$('#pulsante').click(function() {
    // visualizzo il testo

    // alternativa A: utilizzando la funzione show() di jQury
    // $('#testo').show();

    // alternativa B: aggiungendo una classe
    $('#testo').addClass('visibile');
})
