// Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio.

// intercettare il mouse enter nel cerchio
$('.cerchio').mouseenter(function() {
    // il mouse è entrato nel cerchio
    // rendere visibile la scritta => aggiungere la classe 'visibile'
    $('.cerchio h1').addClass('visibile');
}).mouseleave(function() {
    // il mouse è uscito dal cerchio
    // nascondere la scritta => togliere la classe 'visibile'
    $('.cerchio h1').removeClass('visibile');
})
