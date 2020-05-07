// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

// genero 15 numeri casuali che saranno i quadrati rossi
var quadrati_rossi = [];
do {
    var numero_random = genera_random(0, 63);
    if(!quadrati_rossi.includes(numero_random)) {
        quadrati_rossi.push(numero_random);
    }
} while (quadrati_rossi.length < 15);
console.log(quadrati_rossi);

// BONUS: generare la griglia dei quadratini utilizzando jQuery
// procedimento A: genero la griglia con già le classi giuste!
for (var i = 0; i < 64; i++) {
    // genero la griglia considerando già quali saranno rossi
    // verifico se l'indice del ciclo corrisponde alla posizione di un quadrato rosso
    if(quadrati_rossi.includes(i)) {
        // l'i-esimo quadrato deve essere rosso
        $('#griglia').append('<div class="quadrato divento-rosso"></div>');
    } else {
        // questo quadrato non sarà rosso
        $('#griglia').append('<div class="quadrato"></div>');
    }
}

// procedimento B: genero la griglia di quadrati e poi aggiungo la classe ai quadrati rossi
// // genero 64 quadrati tutti uguali
// for (var i = 0; i < 64; i++) {
//     $('#griglia').append('<div class="quadrato"></div>');
// }
// // dopo aver generato i quadrati, li ciclo per verificare quali devono diventare rossi
// $('#griglia .quadrato').each(function(index) {
//     if(quadrati_rossi.includes(index)) {
//         // l'indice di questo quadrato corrisponde ad una posizione di un quadrato rosso
//         $(this).addClass('divento-rosso');
//     }
// });

// intercetto il click sul quadrato
$('.quadrato').click(function() {
    // verifico se l'elemento su cui ho cliccato ha la classe "divento-rosso"
    if($(this).hasClass('divento-rosso')) {
        $(this).addClass('rosso');
    } else {
        $(this).addClass('verde');
    }
});

function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
