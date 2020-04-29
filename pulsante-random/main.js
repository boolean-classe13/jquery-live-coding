// Al click di un pulsante, deve apparire un alert con un numero random

// procedimento utilizzando JavaScript "plain"
// var pulsante = document.getElementById('bottone');
// pulsante.addEventListener('click', function() {
//     var random =  Math.floor(Math.random() * 10) + 1;
//     alert(random);
// });

// procedimento utilizzando jQuery
$('#bottone').click(function() {
    var random =  Math.floor(Math.random() * 10) + 1;
    alert(random);
});
