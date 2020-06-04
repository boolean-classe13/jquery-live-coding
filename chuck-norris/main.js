$(document).ready(function() {

    var template = Handlebars.compile( $('#battuta-template').html() );
    var template_option = Handlebars.compile( $('#option-template').html() );


    // recupero le categorie esistenti
    $.ajax({
        'url': 'https://api.chucknorris.io/jokes/categories',
        'method': 'GET',
        'success': function(categorie) {
            for (var i = 0; i < categorie.length; i++) {
                var categoria = categorie[i];
                var html_option = template_option({'valore': categoria});
                $('#scelta-categoria').append(html_option);
            }
        },
        'error': function() {
            console.log('Si è verificato un errore');
        }
    });


    // intercetto il click sul bottone per una nuova battuta casuale con categoria
    $('#nuova-battuta').click(function() {

        // recupero la categoria selezionata
        var categoria_selezionata = $('#scelta-categoria').val();

        // chiamata ajax per recuperare una battuta
        $.ajax({
            'url': 'https://api.chucknorris.io/jokes/random',
            'data': {
                'category': categoria_selezionata
            },
            'method': 'GET',
            'success': function(data) {
                var html = template({'testo': data.value});
                $('#battute-container').prepend(html);
            },
            'error': function() {
                console.log('Si è verificato un errore');
            }
        });
    });

    // intercetto il click sul bottone per la ricerca
    $('#cerca').click(function() {

        // recupero il testo inserito dall'utente
        var testo_utente = $('#testo-ricerca').val();
        // resetto l'input
        $('#testo-ricerca').val('');

        // chiamata ajax per recuperare le battute con il testo dell'utente
        $.ajax({
            'url': 'https://api.chucknorris.io/jokes/search',
            'data': {
                'query': testo_utente
            },
            'method': 'GET',
            'success': function(data) {
                var battute = data.result;
                for (var i = 0; i < battute.length; i++) {
                    var battuta_corrente = battute[i];
                    console.log(battuta_corrente.value);
                    var html = template({'testo': battuta_corrente.value});
                    $('#battute-container').prepend(html);
                }
            },
            'error': function() {
                console.log('Si è verificato un errore');
            }
        });
    });


});
