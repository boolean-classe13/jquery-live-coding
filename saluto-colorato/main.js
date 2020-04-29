var nome = prompt('Come ti chiami?');
console.log(nome);

var sesso = prompt('Sei maschio o femmina?');
console.log(sesso);

// // procedimento utilizzando JavaScript "plain"
// var elemento = document.getElementById('saluto');
// if(sesso.toLowerCase() == 'maschio') {
//     elemento.className = 'maschio';
// } else {
//     elemento.className = 'femmina';
// }
// elemento.innerHTML = 'Ciao ' + nome;


// procedimento utilizzando jQuery
var elemento = $('#saluto');
if(sesso.toLowerCase() == 'maschio') {
    elemento.addClass('maschio');
} else {
    elemento.addClass('femmina');
}
elemento.text('Ciao ' + nome);
