$(document).ready(function() {

    // intercetto il click su una voce principale di menu
    $('#main-menu > li > a').click(function() {
        // recupero il tag ul con classe dropdown che è suo fratello
        var sottomenu = $(this).next('.dropdown');

        // valuto se l'elemento su cui ho cliccato ha già il dropdown aperto
        if(sottomenu.is(':visible')) {
            // se sì => ho cliccato la stessa voce per chiuderlo
            sottomenu.hide();
        } else {
            // se no => ho cliccato una nuova voce per aprirlo
            // chiudo altri eventuali dropdown aperti in precedenza
            $('.dropdown').hide();
            // visualizzo il menu dropdown
            sottomenu.show();
        }

    });


});
