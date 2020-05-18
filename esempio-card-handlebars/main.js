// array di oggetti di tipo studente: ogni studente ha un nome, una lista di materie preferite e un'immagine
var studenti = [
    {
        'nome': 'Pippo',
        'materie': ['HTML', 'CSS', 'jQuery'],
        'foto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png'
    },
    {
       'nome': 'Pluto',
       'materie': ['Handlebars', 'js'],
       'foto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png'
   },
   {
       'nome': 'Paperino',
       'materie': ['CSS', 'PHP', 'SQL'],
       'foto': 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'
   }
];

// recupero la struttura html del template di base
var template_html = $('#card-studente').html();
// preparo la funzione da utilizzare per utilizzare il template
var template_function = Handlebars.compile(template_html);

// ciclo l'array degli studenti
for (var i = 0; i < studenti.length; i++) {
    // recupero l'oggetto che rappresenta lo studente corrente
    var studente_corrente = studenti[i];

    // preparo un oggetto con i dati dello studente da inserire nel template
    var dati_studente = {
        'name': studente_corrente.nome,
        'subjects': studente_corrente.materie.join(', '),
        'image': studente_corrente.foto
    };

    // tramite handlebars preparo l'html finale con i dati dello studente all'interno
    var html_finale = template_function(dati_studente);
    
    // appendo in pagina una card con i dati dello studente
    $('main').append(html_finale);
}
