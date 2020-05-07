// Creare in HTML una griglia formata da 3x3 quadratini tutti bianchi.
// 2 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

// genero la griglia 3x3
for (var i = 0; i < 9; i++) {
    $('#griglia').append('<div class="quadrato"></div>');
}

// estraggo due numeri random tra 1 e 9
var quadrati_rossi = [];
do {
    var numero_random = genera_random(1, 9);
    if(!quadrati_rossi.includes(numero_random)) {
        quadrati_rossi.push(numero_random);
    }
} while(quadrati_rossi.length < 2);

console.log(quadrati_rossi);

// intercetto il click sul quadrato
$('.quadrato').click(function() {
    // recupero l'indice del quadrato su cui ho cliccato
    var indice = $(this).index() + 1;
    console.log(indice);
    // verifico se l'indice del quadrato su cui ho cliccato corrisponde ad un quadrato che diventa rosso
    if(quadrati_rossi.includes(indice)) {
        // l'indice del quadrato su cui ho cliccato è presente nell'array dei quadrati rossi
        $(this).addClass('rosso');
    } else {
        // l'indice del quadrato su cui ho cliccato non è presente nell'array dei quadrati rossi
        $(this).addClass('verde');
    }
});

function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
