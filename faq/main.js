// Creare una piccola sezione FAQ.
// Tante domande che quando cliccate visualizzano la risposta corrispondente.

$(document).ready(function() {

    // intercetto il click su una domanda
    $('.domanda').click(function() {
        // valuto se la risposta è già aperta oppure no
        if($(this).next('.risposta').hasClass('aperta')) {
            // la risposta è già aperta => la chiudo => tolgo la classe "aperta"
            $(this).next('.risposta').removeClass('aperta');
        } else {
            // la risposta è chiusa => la devo aprire, DOPO aver chiuso altre risposte già aperte in precedenza
            // chiudo tutte le eventuali risposte aperte => tolgo loro la classe "aperta"
            $('.risposta').removeClass('aperta');
            // recupero la risposta relativa a questa domanda (quella su cui ho cliccato) e la apro => aggiungo la classe "aperta"
            $(this).next('.risposta').addClass('aperta');
        }
    });

    // BONUS: far sì che cliccando da qualsiasi parte si chiudano tutte le domande
    // intercetto il click su document, cioè tutta la pagina
    $(document).click(function(event) {
        // recupero l'elemento target del click (elemento specifico su cui ho cliccato nella pagina)
        var target = $(event.target);
        // verifico che l'elemento su cui ho cliccato non sia una domanda né una risposta
        if(!target.hasClass('domanda') && !target.hasClass('risposta')){
            // nascondo tutte le enventuali domande aperte
            $('.risposta').removeClass('aperta');
        }
    });


});
